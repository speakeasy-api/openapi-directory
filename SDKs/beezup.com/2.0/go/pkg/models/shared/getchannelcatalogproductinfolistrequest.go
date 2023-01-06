package shared

type GetChannelCatalogProductInfoListRequest struct {
	CatalogCategoryFilter *BeezUpCommonCatalogCategoryFilter `json:"catalogCategoryFilter,omitempty"`
	ChannelCategoryFilter *BeezUpCommonChannelCategoryFilter `json:"channelCategoryFilter,omitempty"`
	Criteria              ProductSetVisibilityCriteria       `json:"criteria"`
	Overridden            *bool                              `json:"overridden,omitempty"`
	PageNumber            int32                              `json:"pageNumber"`
	PageSize              int32                              `json:"pageSize"`
	ProductFilters        *ChannelCatalogProductFilters      `json:"productFilters,omitempty"`
}
