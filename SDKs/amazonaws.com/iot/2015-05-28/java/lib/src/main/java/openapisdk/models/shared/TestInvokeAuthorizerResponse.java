package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestInvokeAuthorizerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disconnectAfterInSeconds")
    public Long disconnectAfterInSeconds;
    public TestInvokeAuthorizerResponse withDisconnectAfterInSeconds(Long disconnectAfterInSeconds) {
        this.disconnectAfterInSeconds = disconnectAfterInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAuthenticated")
    public Boolean isAuthenticated;
    public TestInvokeAuthorizerResponse withIsAuthenticated(Boolean isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policyDocuments")
    public String[] policyDocuments;
    public TestInvokeAuthorizerResponse withPolicyDocuments(String[] policyDocuments) {
        this.policyDocuments = policyDocuments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalId")
    public String principalId;
    public TestInvokeAuthorizerResponse withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshAfterInSeconds")
    public Long refreshAfterInSeconds;
    public TestInvokeAuthorizerResponse withRefreshAfterInSeconds(Long refreshAfterInSeconds) {
        this.refreshAfterInSeconds = refreshAfterInSeconds;
        return this;
    }
}