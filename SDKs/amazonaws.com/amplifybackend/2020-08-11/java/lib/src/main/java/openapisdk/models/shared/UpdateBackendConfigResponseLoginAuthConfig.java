package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendConfigResponseLoginAuthConfig
 * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
**/
public class UpdateBackendConfigResponseLoginAuthConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCognitoIdentityPoolId")
    public java.util.Map<String, Object> awsCognitoIdentityPoolId;
    public UpdateBackendConfigResponseLoginAuthConfig withAwsCognitoIdentityPoolId(java.util.Map<String, Object> awsCognitoIdentityPoolId) {
        this.awsCognitoIdentityPoolId = awsCognitoIdentityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsCognitoRegion")
    public java.util.Map<String, Object> awsCognitoRegion;
    public UpdateBackendConfigResponseLoginAuthConfig withAwsCognitoRegion(java.util.Map<String, Object> awsCognitoRegion) {
        this.awsCognitoRegion = awsCognitoRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsUserPoolsId")
    public java.util.Map<String, Object> awsUserPoolsId;
    public UpdateBackendConfigResponseLoginAuthConfig withAwsUserPoolsId(java.util.Map<String, Object> awsUserPoolsId) {
        this.awsUserPoolsId = awsUserPoolsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsUserPoolsWebClientId")
    public java.util.Map<String, Object> awsUserPoolsWebClientId;
    public UpdateBackendConfigResponseLoginAuthConfig withAwsUserPoolsWebClientId(java.util.Map<String, Object> awsUserPoolsWebClientId) {
        this.awsUserPoolsWebClientId = awsUserPoolsWebClientId;
        return this;
    }
}