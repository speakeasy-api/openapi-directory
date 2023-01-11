package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAssessmentReportEvidenceFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public AssociateAssessmentReportEvidenceFolderPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
}