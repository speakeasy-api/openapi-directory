package shared

// ChannelCatalogState
// Channel Catalog State
type ChannelCatalogState struct {
	APISettingsStatus    *BeezUpCommonAPISettingsStatusEnum `json:"apiSettingsStatus,omitempty"`
	CategoryMappingState CategoryMappingState               `json:"categoryMappingState"`
	ColumnMappingStatus  ColumnMappingStatusEnum            `json:"columnMappingStatus"`
	ExportedProductCount int32                              `json:"exportedProductCount"`
}
