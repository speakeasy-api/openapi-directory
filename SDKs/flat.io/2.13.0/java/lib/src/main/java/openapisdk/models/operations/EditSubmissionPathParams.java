package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditSubmissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public EditSubmissionPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public EditSubmissionPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=submission")
    public String submission;
    public EditSubmissionPathParams withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}