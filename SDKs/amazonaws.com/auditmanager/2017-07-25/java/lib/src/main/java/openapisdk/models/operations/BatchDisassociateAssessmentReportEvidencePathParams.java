package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateAssessmentReportEvidencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public BatchDisassociateAssessmentReportEvidencePathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}