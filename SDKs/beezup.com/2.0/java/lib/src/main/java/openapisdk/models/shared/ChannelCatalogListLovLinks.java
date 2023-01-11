package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogListLovLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCatalogExclusionFilterOperatorLov")
    public BeezUpCommonLovLink3 channelCatalogExclusionFilterOperatorLov;
    public ChannelCatalogListLovLinks withChannelCatalogExclusionFilterOperatorLov(BeezUpCommonLovLink3 channelCatalogExclusionFilterOperatorLov) {
        this.channelCatalogExclusionFilterOperatorLov = channelCatalogExclusionFilterOperatorLov;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCatalogExportCacheStatusLov")
    public BeezUpCommonLovLink3 channelCatalogExportCacheStatusLov;
    public ChannelCatalogListLovLinks withChannelCatalogExportCacheStatusLov(BeezUpCommonLovLink3 channelCatalogExportCacheStatusLov) {
        this.channelCatalogExportCacheStatusLov = channelCatalogExportCacheStatusLov;
        return this;
    }
}