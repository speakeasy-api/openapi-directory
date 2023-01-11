package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCreateDelegationByAssessmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public BatchCreateDelegationByAssessmentPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}