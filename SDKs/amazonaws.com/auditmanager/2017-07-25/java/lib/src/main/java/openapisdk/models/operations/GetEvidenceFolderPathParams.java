package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceFolderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assessmentId")
    public String assessmentId;
    public GetEvidenceFolderPathParams withAssessmentId(String assessmentId) {
        this.assessmentId = assessmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=controlSetId")
    public String controlSetId;
    public GetEvidenceFolderPathParams withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=evidenceFolderId")
    public String evidenceFolderId;
    public GetEvidenceFolderPathParams withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
}