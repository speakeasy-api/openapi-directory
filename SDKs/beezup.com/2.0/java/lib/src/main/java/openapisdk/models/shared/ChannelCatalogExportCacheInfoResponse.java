package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChannelCatalogExportCacheInfoResponse {
    @JsonProperty("cacheInfo")
    public ChannelCatalogExportCacheInfo cacheInfo;
    public ChannelCatalogExportCacheInfoResponse withCacheInfo(ChannelCatalogExportCacheInfo cacheInfo) {
        this.cacheInfo = cacheInfo;
        return this;
    }
    @JsonProperty("links")
    public ChannelCatalogExportCacheInfoResponseLinks links;
    public ChannelCatalogExportCacheInfoResponse withLinks(ChannelCatalogExportCacheInfoResponseLinks links) {
        this.links = links;
        return this;
    }
}