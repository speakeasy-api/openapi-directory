package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelCatalogProductByChannelCatalogResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelCatalogs")
    public java.util.Map<String, ChannelCatalogProductInfo> channelCatalogs;
    public ChannelCatalogProductByChannelCatalogResponse withChannelCatalogs(java.util.Map<String, ChannelCatalogProductInfo> channelCatalogs) {
        this.channelCatalogs = channelCatalogs;
        return this;
    }
}