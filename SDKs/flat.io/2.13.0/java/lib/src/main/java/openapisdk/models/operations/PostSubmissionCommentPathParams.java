package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSubmissionCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public PostSubmissionCommentPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public PostSubmissionCommentPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=submission")
    public String submission;
    public PostSubmissionCommentPathParams withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}