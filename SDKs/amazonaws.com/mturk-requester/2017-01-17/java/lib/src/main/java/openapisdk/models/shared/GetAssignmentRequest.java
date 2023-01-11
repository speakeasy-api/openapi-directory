package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAssignmentRequest {
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public GetAssignmentRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
}