package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApprovalResult
 * Represents information about the result of an approval request.
**/
public class ApprovalResult {
    @JsonProperty("status")
    public ApprovalStatusEnum status;
    public ApprovalResult withStatus(ApprovalStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("summary")
    public String summary;
    public ApprovalResult withSummary(String summary) {
        this.summary = summary;
        return this;
    }
}