package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoreShareLinks
 * The different actions you can make on this store share
**/
public class StoreShareLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteShare")
    public LinksDeleteStoreShareLink deleteShare;
    public StoreShareLinks withDeleteShare(LinksDeleteStoreShareLink deleteShare) {
        this.deleteShare = deleteShare;
        return this;
    }
}