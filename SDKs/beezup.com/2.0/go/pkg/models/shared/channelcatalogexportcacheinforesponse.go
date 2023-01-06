package shared

type ChannelCatalogExportCacheInfoResponse struct {
	CacheInfo ChannelCatalogExportCacheInfo              `json:"cacheInfo"`
	Links     ChannelCatalogExportCacheInfoResponseLinks `json:"links"`
}
