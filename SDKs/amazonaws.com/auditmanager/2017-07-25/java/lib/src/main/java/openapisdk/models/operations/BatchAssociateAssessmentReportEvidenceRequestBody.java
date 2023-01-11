package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchAssociateAssessmentReportEvidenceRequestBody {
    @JsonProperty("evidenceFolderId")
    public String evidenceFolderId;
    public BatchAssociateAssessmentReportEvidenceRequestBody withEvidenceFolderId(String evidenceFolderId) {
        this.evidenceFolderId = evidenceFolderId;
        return this;
    }
    @JsonProperty("evidenceIds")
    public String[] evidenceIds;
    public BatchAssociateAssessmentReportEvidenceRequestBody withEvidenceIds(String[] evidenceIds) {
        this.evidenceIds = evidenceIds;
        return this;
    }
}