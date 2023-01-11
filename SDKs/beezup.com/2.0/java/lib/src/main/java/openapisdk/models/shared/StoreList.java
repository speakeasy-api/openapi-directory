package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StoreList {
    @JsonProperty("links")
    public StoreListLinks links;
    public StoreList withLinks(StoreListLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("stores")
    public Store[] stores;
    public StoreList withStores(Store[] stores) {
        this.stores = stores;
        return this;
    }
}