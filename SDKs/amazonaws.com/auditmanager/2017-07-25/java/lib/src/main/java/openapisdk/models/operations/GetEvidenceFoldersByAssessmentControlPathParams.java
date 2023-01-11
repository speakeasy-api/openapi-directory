package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceFoldersByAssessmentControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetEvidenceFoldersByAssessmentControlPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlId")
    public String controlId;
    public GetEvidenceFoldersByAssessmentControlPathParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlSetId")
    public String controlSetId;
    public GetEvidenceFoldersByAssessmentControlPathParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
}