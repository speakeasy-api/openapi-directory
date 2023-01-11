package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddChannelCatalogRequest {
    @JsonProperty("channelId")
    public String channelId;
    public AddChannelCatalogRequest withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonProperty("storeId")
    public String storeId;
    public AddChannelCatalogRequest withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}