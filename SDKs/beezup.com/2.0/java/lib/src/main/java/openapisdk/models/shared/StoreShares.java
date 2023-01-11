package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StoreShares {
    @JsonProperty("links")
    public StoreSharesLinks links;
    public StoreShares withLinks(StoreSharesLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("shares")
    public StoreShare[] shares;
    public StoreShares withShares(StoreShare[] shares) {
        this.shares = shares;
        return this;
    }
}