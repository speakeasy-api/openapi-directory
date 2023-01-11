package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorizerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerCredentialsArn")
    public java.util.Map<String, Object> authorizerCredentialsArn;
    public GetAuthorizerResponse withAuthorizerCredentialsArn(java.util.Map<String, Object> authorizerCredentialsArn) {
        this.authorizerCredentialsArn = authorizerCredentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerId")
    public java.util.Map<String, Object> authorizerId;
    public GetAuthorizerResponse withAuthorizerId(java.util.Map<String, Object> authorizerId) {
        this.authorizerId = authorizerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerPayloadFormatVersion")
    public java.util.Map<String, Object> authorizerPayloadFormatVersion;
    public GetAuthorizerResponse withAuthorizerPayloadFormatVersion(java.util.Map<String, Object> authorizerPayloadFormatVersion) {
        this.authorizerPayloadFormatVersion = authorizerPayloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerResultTtlInSeconds")
    public java.util.Map<String, Object> authorizerResultTtlInSeconds;
    public GetAuthorizerResponse withAuthorizerResultTtlInSeconds(java.util.Map<String, Object> authorizerResultTtlInSeconds) {
        this.authorizerResultTtlInSeconds = authorizerResultTtlInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerType")
    public java.util.Map<String, Object> authorizerType;
    public GetAuthorizerResponse withAuthorizerType(java.util.Map<String, Object> authorizerType) {
        this.authorizerType = authorizerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerUri")
    public java.util.Map<String, Object> authorizerUri;
    public GetAuthorizerResponse withAuthorizerUri(java.util.Map<String, Object> authorizerUri) {
        this.authorizerUri = authorizerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableSimpleResponses")
    public java.util.Map<String, Object> enableSimpleResponses;
    public GetAuthorizerResponse withEnableSimpleResponses(java.util.Map<String, Object> enableSimpleResponses) {
        this.enableSimpleResponses = enableSimpleResponses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentitySource")
    public java.util.Map<String, Object> identitySource;
    public GetAuthorizerResponse withIdentitySource(java.util.Map<String, Object> identitySource) {
        this.identitySource = identitySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityValidationExpression")
    public java.util.Map<String, Object> identityValidationExpression;
    public GetAuthorizerResponse withIdentityValidationExpression(java.util.Map<String, Object> identityValidationExpression) {
        this.identityValidationExpression = identityValidationExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JwtConfiguration")
    public GetAuthorizerResponseJwtConfiguration jwtConfiguration;
    public GetAuthorizerResponse withJwtConfiguration(GetAuthorizerResponseJwtConfiguration jwtConfiguration) {
        this.jwtConfiguration = jwtConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public GetAuthorizerResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
}