package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAuthorizerRequestBody {
    @JsonProperty("authorizerFunctionArn")
    public String authorizerFunctionArn;
    public CreateAuthorizerRequestBody withAuthorizerFunctionArn(String authorizerFunctionArn) {
        this.authorizerFunctionArn = authorizerFunctionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingDisabled")
    public Boolean signingDisabled;
    public CreateAuthorizerRequestBody withSigningDisabled(Boolean signingDisabled) {
        this.signingDisabled = signingDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CreateAuthorizerRequestBodyStatusEnum status;
    public CreateAuthorizerRequestBody withStatus(CreateAuthorizerRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateAuthorizerRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenKeyName")
    public String tokenKeyName;
    public CreateAuthorizerRequestBody withTokenKeyName(String tokenKeyName) {
        this.tokenKeyName = tokenKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenSigningPublicKeys")
    public java.util.Map<String, String> tokenSigningPublicKeys;
    public CreateAuthorizerRequestBody withTokenSigningPublicKeys(java.util.Map<String, String> tokenSigningPublicKeys) {
        this.tokenSigningPublicKeys = tokenSigningPublicKeys;
        return this;
    }
}