package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignmentSubmissionUpdate
 * Assignment Submission creation
**/
public class AssignmentSubmissionUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachments")
    public ClassAttachmentCreation[] attachments;
    public AssignmentSubmissionUpdate withAttachments(ClassAttachmentCreation[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public AssignmentSubmissionUpdateComments comments;
    public AssignmentSubmissionUpdate withComments(AssignmentSubmissionUpdateComments comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draftGrade")
    public Double draftGrade;
    public AssignmentSubmissionUpdate withDraftGrade(Double draftGrade) {
        this.draftGrade = draftGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grade")
    public Double grade;
    public AssignmentSubmissionUpdate withGrade(Double grade) {
        this.grade = grade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("return")
    public Boolean return_;
    public AssignmentSubmissionUpdate withReturn(Boolean return_) {
        this.return_ = return_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submit")
    public Boolean submit;
    public AssignmentSubmissionUpdate withSubmit(Boolean submit) {
        this.submit = submit;
        return this;
    }
}