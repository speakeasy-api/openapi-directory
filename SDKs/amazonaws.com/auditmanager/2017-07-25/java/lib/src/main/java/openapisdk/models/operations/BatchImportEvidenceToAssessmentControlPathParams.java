package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchImportEvidenceToAssessmentControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public BatchImportEvidenceToAssessmentControlPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlId")
    public String controlId;
    public BatchImportEvidenceToAssessmentControlPathParams withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlSetId")
    public String controlSetId;
    public BatchImportEvidenceToAssessmentControlPathParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
}