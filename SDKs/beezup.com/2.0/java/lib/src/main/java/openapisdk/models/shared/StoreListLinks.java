package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoreListLinks
 * The action links you can do globally on stores
**/
public class StoreListLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createStore")
    public LinksCreateStoreLink createStore;
    public StoreListLinks withCreateStore(LinksCreateStoreLink createStore) {
        this.createStore = createStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetStoresLink self;
    public StoreListLinks withSelf(LinksGetStoresLink self) {
        this.self = self;
        return this;
    }
}