package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReceivedMetadata
 * Metadata associated with received licenses and grants.
**/
public class ReceivedMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedOperations")
    public AllowedOperationEnum[] allowedOperations;
    public ReceivedMetadata withAllowedOperations(AllowedOperationEnum[] allowedOperations) {
        this.allowedOperations = allowedOperations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceivedStatus")
    public ReceivedStatusEnum receivedStatus;
    public ReceivedMetadata withReceivedStatus(ReceivedStatusEnum receivedStatus) {
        this.receivedStatus = receivedStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReceivedStatusReason")
    public String receivedStatusReason;
    public ReceivedMetadata withReceivedStatusReason(String receivedStatusReason) {
        this.receivedStatusReason = receivedStatusReason;
        return this;
    }
}