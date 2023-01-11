package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendConfigRequestBodyLoginAuthConfig
 * The request object for this operation.
**/
public class UpdateBackendConfigRequestBodyLoginAuthConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCognitoIdentityPoolId")
    public java.util.Map<String, Object> awsCognitoIdentityPoolId;
    public UpdateBackendConfigRequestBodyLoginAuthConfig withAwsCognitoIdentityPoolId(java.util.Map<String, Object> awsCognitoIdentityPoolId) {
        this.awsCognitoIdentityPoolId = awsCognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCognitoRegion")
    public java.util.Map<String, Object> awsCognitoRegion;
    public UpdateBackendConfigRequestBodyLoginAuthConfig withAwsCognitoRegion(java.util.Map<String, Object> awsCognitoRegion) {
        this.awsCognitoRegion = awsCognitoRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsUserPoolsId")
    public java.util.Map<String, Object> awsUserPoolsId;
    public UpdateBackendConfigRequestBodyLoginAuthConfig withAwsUserPoolsId(java.util.Map<String, Object> awsUserPoolsId) {
        this.awsUserPoolsId = awsUserPoolsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsUserPoolsWebClientId")
    public java.util.Map<String, Object> awsUserPoolsWebClientId;
    public UpdateBackendConfigRequestBodyLoginAuthConfig withAwsUserPoolsWebClientId(java.util.Map<String, Object> awsUserPoolsWebClientId) {
        this.awsUserPoolsWebClientId = awsUserPoolsWebClientId;
        return this;
    }
}