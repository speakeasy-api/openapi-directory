package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIntegrationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public CreateIntegrationRequestBody withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionType")
    public CreateIntegrationRequestBodyConnectionTypeEnum connectionType;
    public CreateIntegrationRequestBody withConnectionType(CreateIntegrationRequestBodyConnectionTypeEnum connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentHandlingStrategy")
    public CreateIntegrationRequestBodyContentHandlingStrategyEnum contentHandlingStrategy;
    public CreateIntegrationRequestBody withContentHandlingStrategy(CreateIntegrationRequestBodyContentHandlingStrategyEnum contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialsArn")
    public String credentialsArn;
    public CreateIntegrationRequestBody withCredentialsArn(String credentialsArn) {
        this.credentialsArn = credentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateIntegrationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationMethod")
    public String integrationMethod;
    public CreateIntegrationRequestBody withIntegrationMethod(String integrationMethod) {
        this.integrationMethod = integrationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationSubtype")
    public String integrationSubtype;
    public CreateIntegrationRequestBody withIntegrationSubtype(String integrationSubtype) {
        this.integrationSubtype = integrationSubtype;
        return this;
    }
    @JsonProperty("integrationType")
    public CreateIntegrationRequestBodyIntegrationTypeEnum integrationType;
    public CreateIntegrationRequestBody withIntegrationType(CreateIntegrationRequestBodyIntegrationTypeEnum integrationType) {
        this.integrationType = integrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationUri")
    public String integrationUri;
    public CreateIntegrationRequestBody withIntegrationUri(String integrationUri) {
        this.integrationUri = integrationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passthroughBehavior")
    public CreateIntegrationRequestBodyPassthroughBehaviorEnum passthroughBehavior;
    public CreateIntegrationRequestBody withPassthroughBehavior(CreateIntegrationRequestBodyPassthroughBehaviorEnum passthroughBehavior) {
        this.passthroughBehavior = passthroughBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadFormatVersion")
    public String payloadFormatVersion;
    public CreateIntegrationRequestBody withPayloadFormatVersion(String payloadFormatVersion) {
        this.payloadFormatVersion = payloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestParameters")
    public java.util.Map<String, String> requestParameters;
    public CreateIntegrationRequestBody withRequestParameters(java.util.Map<String, String> requestParameters) {
        this.requestParameters = requestParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTemplates")
    public java.util.Map<String, String> requestTemplates;
    public CreateIntegrationRequestBody withRequestTemplates(java.util.Map<String, String> requestTemplates) {
        this.requestTemplates = requestTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, java.util.Map<String, String>> responseParameters;
    public CreateIntegrationRequestBody withResponseParameters(java.util.Map<String, java.util.Map<String, String>> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateSelectionExpression")
    public String templateSelectionExpression;
    public CreateIntegrationRequestBody withTemplateSelectionExpression(String templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInMillis")
    public Long timeoutInMillis;
    public CreateIntegrationRequestBody withTimeoutInMillis(Long timeoutInMillis) {
        this.timeoutInMillis = timeoutInMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsConfig")
    public CreateIntegrationRequestBodyTlsConfig tlsConfig;
    public CreateIntegrationRequestBody withTlsConfig(CreateIntegrationRequestBodyTlsConfig tlsConfig) {
        this.tlsConfig = tlsConfig;
        return this;
    }
}