package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetEvidencePathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlSetId")
    public String controlSetId;
    public GetEvidencePathParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=evidenceFolderId")
    public String evidenceFolderId;
    public GetEvidencePathParams withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=evidenceId")
    public String evidenceId;
    public GetEvidencePathParams withEvidenceId(String evidenceId) {
        this.evidenceId = evidenceId;
        return this;
    }
}