package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceByEvidenceFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetEvidenceByEvidenceFolderPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlSetId")
    public String controlSetId;
    public GetEvidenceByEvidenceFolderPathParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=evidenceFolderId")
    public String evidenceFolderId;
    public GetEvidenceByEvidenceFolderPathParams withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
}