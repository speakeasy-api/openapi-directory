package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SellerActionsToRelease
 * This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
**/
public class SellerActionsToRelease {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerActionToRelease")
    public String sellerActionToRelease;
    public SellerActionsToRelease withSellerActionToRelease(String sellerActionToRelease) {
        this.sellerActionToRelease = sellerActionToRelease;
        return this;
    }
}