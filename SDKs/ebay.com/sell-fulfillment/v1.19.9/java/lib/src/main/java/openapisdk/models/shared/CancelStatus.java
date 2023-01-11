package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelStatus
 * This type contains information about any requests that have been made to cancel an order.
**/
public class CancelStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelRequests")
    public CancelRequest[] cancelRequests;
    public CancelStatus withCancelRequests(CancelRequest[] cancelRequests) {
        this.cancelRequests = cancelRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelState")
    public String cancelState;
    public CancelStatus withCancelState(String cancelState) {
        this.cancelState = cancelState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelledDate")
    public String cancelledDate;
    public CancelStatus withCancelledDate(String cancelledDate) {
        this.cancelledDate = cancelledDate;
        return this;
    }
}