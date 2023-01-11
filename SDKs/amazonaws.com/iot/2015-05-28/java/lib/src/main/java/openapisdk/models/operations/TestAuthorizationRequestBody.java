package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestAuthorizationRequestBody {
    @JsonProperty("authInfos")
    public openapisdk.models.shared.AuthInfo[] authInfos;
    public TestAuthorizationRequestBody withAuthInfos(openapisdk.models.shared.AuthInfo[] authInfos) {
        this.authInfos = authInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cognitoIdentityPoolId")
    public String cognitoIdentityPoolId;
    public TestAuthorizationRequestBody withCognitoIdentityPoolId(String cognitoIdentityPoolId) {
        this.cognitoIdentityPoolId = cognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyNamesToAdd")
    public String[] policyNamesToAdd;
    public TestAuthorizationRequestBody withPolicyNamesToAdd(String[] policyNamesToAdd) {
        this.policyNamesToAdd = policyNamesToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyNamesToSkip")
    public String[] policyNamesToSkip;
    public TestAuthorizationRequestBody withPolicyNamesToSkip(String[] policyNamesToSkip) {
        this.policyNamesToSkip = policyNamesToSkip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public TestAuthorizationRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
}