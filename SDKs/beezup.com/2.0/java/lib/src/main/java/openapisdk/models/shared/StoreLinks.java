package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoreLinks
 * The action links for this store
**/
public class StoreLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteStore")
    public LinksDeleteStoreLink deleteStore;
    public StoreLinks withDeleteStore(LinksDeleteStoreLink deleteStore) {
        this.deleteStore = deleteStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetStoreLink self;
    public StoreLinks withSelf(LinksGetStoreLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public LinksShareStoreLink share;
    public StoreLinks withShare(LinksShareStoreLink share) {
        this.share = share;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shares")
    public LinksGetStoreSharesLink shares;
    public StoreLinks withShares(LinksGetStoreSharesLink shares) {
        this.shares = shares;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateStore")
    public LinksUpdateStoreLink updateStore;
    public StoreLinks withUpdateStore(LinksUpdateStoreLink updateStore) {
        this.updateStore = updateStore;
        return this;
    }
}