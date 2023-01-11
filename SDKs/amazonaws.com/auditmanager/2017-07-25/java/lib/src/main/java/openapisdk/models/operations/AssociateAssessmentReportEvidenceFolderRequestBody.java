package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateAssessmentReportEvidenceFolderRequestBody {
    @JsonProperty("evidenceFolderId")
    public String evidenceFolderId;
    public AssociateAssessmentReportEvidenceFolderRequestBody withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
}