package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEvidenceFoldersByAssessmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidenceFolders")
    public AssessmentEvidenceFolder[] evidenceFolders;
    public GetEvidenceFoldersByAssessmentResponse withEvidenceFolders(AssessmentEvidenceFolder[] evidenceFolders) {
        this.evidenceFolders = evidenceFolders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEvidenceFoldersByAssessmentResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}