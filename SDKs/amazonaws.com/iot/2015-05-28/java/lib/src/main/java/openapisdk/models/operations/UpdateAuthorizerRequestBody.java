package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAuthorizerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerFunctionArn")
    public String authorizerFunctionArn;
    public UpdateAuthorizerRequestBody withAuthorizerFunctionArn(String authorizerFunctionArn) {
        this.authorizerFunctionArn = authorizerFunctionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdateAuthorizerRequestBodyStatusEnum status;
    public UpdateAuthorizerRequestBody withStatus(UpdateAuthorizerRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenKeyName")
    public String tokenKeyName;
    public UpdateAuthorizerRequestBody withTokenKeyName(String tokenKeyName) {
        this.tokenKeyName = tokenKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenSigningPublicKeys")
    public java.util.Map<String, String> tokenSigningPublicKeys;
    public UpdateAuthorizerRequestBody withTokenSigningPublicKeys(java.util.Map<String, String> tokenSigningPublicKeys) {
        this.tokenSigningPublicKeys = tokenSigningPublicKeys;
        return this;
    }
}