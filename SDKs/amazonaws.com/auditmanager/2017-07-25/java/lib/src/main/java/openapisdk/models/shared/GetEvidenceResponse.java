package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEvidenceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("evidence")
    public Evidence evidence;
    public GetEvidenceResponse withEvidence(Evidence evidence) {
        this.evidence = evidence;
        return this;
    }
}