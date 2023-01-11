package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogExportCacheInfoResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clear")
    public LinksClearChannelCatalogExportationCacheLink clear;
    public ChannelCatalogExportCacheInfoResponseLinks withClear(LinksClearChannelCatalogExportationCacheLink clear) {
        this.clear = clear;
        return this;
    }
    @JsonProperty("self")
    public LinksGetChannelCatalogExportationCacheInfoLink self;
    public ChannelCatalogExportCacheInfoResponseLinks withSelf(LinksGetChannelCatalogExportationCacheInfoLink self) {
        this.self = self;
        return this;
    }
}