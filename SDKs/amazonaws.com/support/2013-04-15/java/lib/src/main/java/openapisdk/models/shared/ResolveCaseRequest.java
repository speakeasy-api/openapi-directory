package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResolveCaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public ResolveCaseRequest withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
}