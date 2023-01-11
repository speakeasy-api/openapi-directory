package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisassociateAssessmentReportEvidenceRequestBody {
    @JsonProperty("evidenceFolderId")
    public String evidenceFolderId;
    public BatchDisassociateAssessmentReportEvidenceRequestBody withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
    @JsonProperty("evidenceIds")
    public String[] evidenceIds;
    public BatchDisassociateAssessmentReportEvidenceRequestBody withEvidenceIds(String[] evidenceIds) {
        this.evidenceIds = evidenceIds;
        return this;
    }
}