package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateAssessmentReportEvidenceFolderRequestBody {
    @JsonProperty("evidenceFolderId")
    public String evidenceFolderId;
    public DisassociateAssessmentReportEvidenceFolderRequestBody withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
}