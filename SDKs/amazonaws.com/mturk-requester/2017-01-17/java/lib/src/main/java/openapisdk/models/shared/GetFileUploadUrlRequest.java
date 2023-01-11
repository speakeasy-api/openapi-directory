package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFileUploadUrlRequest {
    @JsonProperty("AssignmentId")
    public String assignmentId;
    public GetFileUploadUrlRequest withAssignmentId(String assignmentId) {
        this.assignmentId = assignmentId;
        return this;
    }
    @JsonProperty("QuestionIdentifier")
    public String questionIdentifier;
    public GetFileUploadUrlRequest withQuestionIdentifier(String questionIdentifier) {
        this.questionIdentifier = questionIdentifier;
        return this;
    }
}