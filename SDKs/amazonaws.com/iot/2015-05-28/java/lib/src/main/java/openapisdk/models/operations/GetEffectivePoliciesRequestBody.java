package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEffectivePoliciesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cognitoIdentityPoolId")
    public String cognitoIdentityPoolId;
    public GetEffectivePoliciesRequestBody withCognitoIdentityPoolId(String cognitoIdentityPoolId) {
        this.cognitoIdentityPoolId = cognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GetEffectivePoliciesRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}