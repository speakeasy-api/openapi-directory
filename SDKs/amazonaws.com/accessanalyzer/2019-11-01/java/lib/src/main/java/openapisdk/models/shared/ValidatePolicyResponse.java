package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidatePolicyResponse {
    @JsonProperty("findings")
    public ValidatePolicyFinding[] findings;
    public ValidatePolicyResponse withFindings(ValidatePolicyFinding[] findings) {
        this.findings = findings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ValidatePolicyResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}