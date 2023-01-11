package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssessmentReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public CreateAssessmentReportPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}