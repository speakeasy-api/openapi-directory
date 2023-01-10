package shared

type ChannelCatalogExportCacheInfoResponseLinks struct {
	Clear *LinksClearChannelCatalogExportationCacheLink  `json:"clear,omitempty"`
	Self  LinksGetChannelCatalogExportationCacheInfoLink `json:"self"`
}
