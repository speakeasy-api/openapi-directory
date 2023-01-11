package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssessmentReportUrlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetAssessmentReportUrlPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentReportId")
    public String assessmentReportId;
    public GetAssessmentReportUrlPathParams withAssessmentReportId(String assessmentReportId) {
        this.assessmentReportId = assessmentReportId;
        return this;
    }
}