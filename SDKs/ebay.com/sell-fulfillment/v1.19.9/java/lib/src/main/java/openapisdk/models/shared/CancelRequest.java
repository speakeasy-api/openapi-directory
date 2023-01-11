package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CancelRequest
 * This type contains information about a buyer request to cancel an order.
**/
public class CancelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelCompletedDate")
    public String cancelCompletedDate;
    public CancelRequest withCancelCompletedDate(String cancelCompletedDate) {
        this.cancelCompletedDate = cancelCompletedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelInitiator")
    public String cancelInitiator;
    public CancelRequest withCancelInitiator(String cancelInitiator) {
        this.cancelInitiator = cancelInitiator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelReason")
    public String cancelReason;
    public CancelRequest withCancelReason(String cancelReason) {
        this.cancelReason = cancelReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelRequestId")
    public String cancelRequestId;
    public CancelRequest withCancelRequestId(String cancelRequestId) {
        this.cancelRequestId = cancelRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelRequestState")
    public String cancelRequestState;
    public CancelRequest withCancelRequestState(String cancelRequestState) {
        this.cancelRequestState = cancelRequestState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelRequestedDate")
    public String cancelRequestedDate;
    public CancelRequest withCancelRequestedDate(String cancelRequestedDate) {
        this.cancelRequestedDate = cancelRequestedDate;
        return this;
    }
}