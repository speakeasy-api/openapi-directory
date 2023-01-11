package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizationConfig
 * The authorization config in case the HTTP endpoint requires authorization.
**/
public class AuthorizationConfig {
    @JsonProperty("authorizationType")
    public AuthorizationTypeEnum authorizationType;
    public AuthorizationConfig withAuthorizationType(AuthorizationTypeEnum authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIamConfig")
    public AwsIamConfig awsIamConfig;
    public AuthorizationConfig withAwsIamConfig(AwsIamConfig awsIamConfig) {
        this.awsIamConfig = awsIamConfig;
        return this;
    }
}