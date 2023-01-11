package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateAssessmentReportEvidenceFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public DisassociateAssessmentReportEvidenceFolderPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}