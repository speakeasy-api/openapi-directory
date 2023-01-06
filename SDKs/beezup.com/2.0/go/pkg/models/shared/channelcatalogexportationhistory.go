package shared

type ChannelCatalogExportationHistory struct {
	Exportations     []ChannelCatalogExportationReporting  `json:"exportations"`
	Links            ChannelCatalogExportationHistoryLinks `json:"links"`
	PaginationResult *BeezUpCommonPaginationResult         `json:"paginationResult,omitempty"`
}
