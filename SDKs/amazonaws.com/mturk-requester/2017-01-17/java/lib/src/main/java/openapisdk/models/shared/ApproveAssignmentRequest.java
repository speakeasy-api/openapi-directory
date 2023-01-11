package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApproveAssignmentRequest {
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public ApproveAssignmentRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OverrideRejection")
    public Boolean overrideRejection;
    public ApproveAssignmentRequest withOverrideRejection(Boolean overrideRejection) {
        this.overrideRejection = overrideRejection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequesterFeedback")
    public String requesterFeedback;
    public ApproveAssignmentRequest withRequesterFeedback(String requesterFeedback) {
        this.requesterFeedback = requesterFeedback;
        return this;
    }
}