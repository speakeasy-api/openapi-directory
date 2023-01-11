package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SellingPrivileges
 * A merchant's selling limit, and the status of their account registration.
**/
public class SellingPrivileges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerRegistrationCompleted")
    public Boolean sellerRegistrationCompleted;
    public SellingPrivileges withSellerRegistrationCompleted(Boolean sellerRegistrationCompleted) {
        this.sellerRegistrationCompleted = sellerRegistrationCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellingLimit")
    public SellingLimit sellingLimit;
    public SellingPrivileges withSellingLimit(SellingLimit sellingLimit) {
        this.sellingLimit = sellingLimit;
        return this;
    }
}