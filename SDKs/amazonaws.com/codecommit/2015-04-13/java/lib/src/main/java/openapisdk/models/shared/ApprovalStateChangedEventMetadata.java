package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApprovalStateChangedEventMetadata
 * Returns information about a change in the approval state for a pull request.
**/
public class ApprovalStateChangedEventMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approvalStatus")
    public ApprovalStateEnum approvalStatus;
    public ApprovalStateChangedEventMetadata withApprovalStatus(ApprovalStateEnum approvalStatus) {
        this.approvalStatus = approvalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public ApprovalStateChangedEventMetadata withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}