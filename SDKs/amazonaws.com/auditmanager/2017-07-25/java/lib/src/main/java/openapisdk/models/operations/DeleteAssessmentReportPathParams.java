package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAssessmentReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public DeleteAssessmentReportPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentReportId")
    public String assessmentReportId;
    public DeleteAssessmentReportPathParams withAssessmentReportId(String assessmentReportId) {
        this.assessmentReportId = assessmentReportId;
        return this;
    }
}