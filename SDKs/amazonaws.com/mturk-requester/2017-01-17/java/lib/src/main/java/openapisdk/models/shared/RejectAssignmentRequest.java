package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RejectAssignmentRequest {
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public RejectAssignmentRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
    @JsonProperty("RequesterFeedback")
    public String requesterFeedback;
    public RejectAssignmentRequest withRequesterFeedback(String requesterFeedback) {
        this.requesterFeedback = requesterFeedback;
        return this;
    }
}