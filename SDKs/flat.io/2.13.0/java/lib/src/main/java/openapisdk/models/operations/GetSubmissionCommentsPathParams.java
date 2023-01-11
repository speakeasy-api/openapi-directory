package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubmissionCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public GetSubmissionCommentsPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public GetSubmissionCommentsPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=submission")
    public String submission;
    public GetSubmissionCommentsPathParams withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}