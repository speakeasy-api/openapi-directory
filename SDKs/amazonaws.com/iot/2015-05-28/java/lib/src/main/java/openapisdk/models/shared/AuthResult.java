package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthResult
 * The authorizer result.
**/
public class AuthResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public Allowed allowed;
    public AuthResult withAllowed(Allowed allowed) {
        this.allowed = allowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authDecision")
    public AuthDecisionEnum authDecision;
    public AuthResult withAuthDecision(AuthDecisionEnum authDecision) {
        this.authDecision = authDecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authInfo")
    public AuthInfo authInfo;
    public AuthResult withAuthInfo(AuthInfo authInfo) {
        this.authInfo = authInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denied")
    public Denied denied;
    public AuthResult withDenied(Denied denied) {
        this.denied = denied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missingContextValues")
    public String[] missingContextValues;
    public AuthResult withMissingContextValues(String[] missingContextValues) {
        this.missingContextValues = missingContextValues;
        return this;
    }
}