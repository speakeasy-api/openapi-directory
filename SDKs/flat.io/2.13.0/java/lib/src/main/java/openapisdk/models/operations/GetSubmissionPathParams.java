package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubmissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public GetSubmissionPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public GetSubmissionPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=submission")
    public String submission;
    public GetSubmissionPathParams withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}