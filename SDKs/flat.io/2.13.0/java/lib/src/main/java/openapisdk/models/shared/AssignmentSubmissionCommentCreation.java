package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AssignmentSubmissionCommentCreation
 * Creation of a assignment submission comment
**/
public class AssignmentSubmissionCommentCreation {
    @JsonProperty("comment")
    public String comment;
    public AssignmentSubmissionCommentCreation withComment(String comment) {
        this.comment = comment;
        return this;
    }
}