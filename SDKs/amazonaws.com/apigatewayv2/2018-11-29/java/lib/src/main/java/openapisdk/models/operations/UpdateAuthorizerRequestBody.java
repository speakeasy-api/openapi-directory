package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAuthorizerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerCredentialsArn")
    public String authorizerCredentialsArn;
    public UpdateAuthorizerRequestBody withAuthorizerCredentialsArn(String authorizerCredentialsArn) {
        this.authorizerCredentialsArn = authorizerCredentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerPayloadFormatVersion")
    public String authorizerPayloadFormatVersion;
    public UpdateAuthorizerRequestBody withAuthorizerPayloadFormatVersion(String authorizerPayloadFormatVersion) {
        this.authorizerPayloadFormatVersion = authorizerPayloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerResultTtlInSeconds")
    public Long authorizerResultTtlInSeconds;
    public UpdateAuthorizerRequestBody withAuthorizerResultTtlInSeconds(Long authorizerResultTtlInSeconds) {
        this.authorizerResultTtlInSeconds = authorizerResultTtlInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerType")
    public UpdateAuthorizerRequestBodyAuthorizerTypeEnum authorizerType;
    public UpdateAuthorizerRequestBody withAuthorizerType(UpdateAuthorizerRequestBodyAuthorizerTypeEnum authorizerType) {
        this.authorizerType = authorizerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerUri")
    public String authorizerUri;
    public UpdateAuthorizerRequestBody withAuthorizerUri(String authorizerUri) {
        this.authorizerUri = authorizerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSimpleResponses")
    public Boolean enableSimpleResponses;
    public UpdateAuthorizerRequestBody withEnableSimpleResponses(Boolean enableSimpleResponses) {
        this.enableSimpleResponses = enableSimpleResponses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identitySource")
    public String[] identitySource;
    public UpdateAuthorizerRequestBody withIdentitySource(String[] identitySource) {
        this.identitySource = identitySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityValidationExpression")
    public String identityValidationExpression;
    public UpdateAuthorizerRequestBody withIdentityValidationExpression(String identityValidationExpression) {
        this.identityValidationExpression = identityValidationExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwtConfiguration")
    public UpdateAuthorizerRequestBodyJwtConfiguration jwtConfiguration;
    public UpdateAuthorizerRequestBody withJwtConfiguration(UpdateAuthorizerRequestBodyJwtConfiguration jwtConfiguration) {
        this.jwtConfiguration = jwtConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateAuthorizerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}