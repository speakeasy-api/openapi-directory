package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssessmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetAssessmentPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}