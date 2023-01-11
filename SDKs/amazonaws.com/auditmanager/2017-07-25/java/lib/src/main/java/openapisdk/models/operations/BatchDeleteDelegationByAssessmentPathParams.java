package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteDelegationByAssessmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public BatchDeleteDelegationByAssessmentPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}