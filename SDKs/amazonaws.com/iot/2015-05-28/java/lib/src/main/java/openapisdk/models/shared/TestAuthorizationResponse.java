package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestAuthorizationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authResults")
    public AuthResult[] authResults;
    public TestAuthorizationResponse withAuthResults(AuthResult[] authResults) {
        this.authResults = authResults;
        return this;
    }
}