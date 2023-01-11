package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEvidenceByEvidenceFolderResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence")
    public Evidence[] evidence;
    public GetEvidenceByEvidenceFolderResponse withEvidence(Evidence[] evidence) {
        this.evidence = evidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetEvidenceByEvidenceFolderResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}