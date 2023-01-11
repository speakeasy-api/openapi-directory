package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangeLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetChangeLogsPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}