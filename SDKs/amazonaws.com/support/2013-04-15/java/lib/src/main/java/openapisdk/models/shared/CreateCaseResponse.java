package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCaseResponse
 * The support case ID returned by a successful completion of the <a>CreateCase</a> operation.
**/
public class CreateCaseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public CreateCaseResponse withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
}