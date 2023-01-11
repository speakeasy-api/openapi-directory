package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAuthorizerRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerCredentialsArn")
    public String authorizerCredentialsArn;
    public CreateAuthorizerRequestBody withAuthorizerCredentialsArn(String authorizerCredentialsArn) {
        this.authorizerCredentialsArn = authorizerCredentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerPayloadFormatVersion")
    public String authorizerPayloadFormatVersion;
    public CreateAuthorizerRequestBody withAuthorizerPayloadFormatVersion(String authorizerPayloadFormatVersion) {
        this.authorizerPayloadFormatVersion = authorizerPayloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerResultTtlInSeconds")
    public Long authorizerResultTtlInSeconds;
    public CreateAuthorizerRequestBody withAuthorizerResultTtlInSeconds(Long authorizerResultTtlInSeconds) {
        this.authorizerResultTtlInSeconds = authorizerResultTtlInSeconds;
        return this;
    }
    @JsonProperty("authorizerType")
    public CreateAuthorizerRequestBodyAuthorizerTypeEnum authorizerType;
    public CreateAuthorizerRequestBody withAuthorizerType(CreateAuthorizerRequestBodyAuthorizerTypeEnum authorizerType) {
        this.authorizerType = authorizerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerUri")
    public String authorizerUri;
    public CreateAuthorizerRequestBody withAuthorizerUri(String authorizerUri) {
        this.authorizerUri = authorizerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSimpleResponses")
    public Boolean enableSimpleResponses;
    public CreateAuthorizerRequestBody withEnableSimpleResponses(Boolean enableSimpleResponses) {
        this.enableSimpleResponses = enableSimpleResponses;
        return this;
    }
    @JsonProperty("identitySource")
    public String[] identitySource;
    public CreateAuthorizerRequestBody withIdentitySource(String[] identitySource) {
        this.identitySource = identitySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityValidationExpression")
    public String identityValidationExpression;
    public CreateAuthorizerRequestBody withIdentityValidationExpression(String identityValidationExpression) {
        this.identityValidationExpression = identityValidationExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwtConfiguration")
    public CreateAuthorizerRequestBodyJwtConfiguration jwtConfiguration;
    public CreateAuthorizerRequestBody withJwtConfiguration(CreateAuthorizerRequestBodyJwtConfiguration jwtConfiguration) {
        this.jwtConfiguration = jwtConfiguration;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAuthorizerRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}