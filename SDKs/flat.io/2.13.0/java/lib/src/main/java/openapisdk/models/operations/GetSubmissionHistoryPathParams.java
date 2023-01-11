package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubmissionHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignment")
    public String assignment;
    public GetSubmissionHistoryPathParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=class")
    public String class_;
    public GetSubmissionHistoryPathParams withClass(String class_) {
        this.class_ = class_;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=submission")
    public String submission;
    public GetSubmissionHistoryPathParams withSubmission(String submission) {
        this.submission = submission;
        return this;
    }
}