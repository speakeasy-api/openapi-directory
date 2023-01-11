package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StoreSharesLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksGetStoreSharesLink self;
    public StoreSharesLinks withSelf(LinksGetStoreSharesLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share")
    public LinksShareStoreLink share;
    public StoreSharesLinks withShare(LinksShareStoreLink share) {
        this.share = share;
        return this;
    }
}