package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateAssessmentReportEvidencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public BatchAssociateAssessmentReportEvidencePathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}