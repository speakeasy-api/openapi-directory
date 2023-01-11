package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIntegrationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public CreateIntegrationResult withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionId")
    public java.util.Map<String, Object> connectionId;
    public CreateIntegrationResult withConnectionId(java.util.Map<String, Object> connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionType")
    public java.util.Map<String, Object> connectionType;
    public CreateIntegrationResult withConnectionType(java.util.Map<String, Object> connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentHandlingStrategy")
    public java.util.Map<String, Object> contentHandlingStrategy;
    public CreateIntegrationResult withContentHandlingStrategy(java.util.Map<String, Object> contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CredentialsArn")
    public java.util.Map<String, Object> credentialsArn;
    public CreateIntegrationResult withCredentialsArn(java.util.Map<String, Object> credentialsArn) {
        this.credentialsArn = credentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public CreateIntegrationResult withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationId")
    public java.util.Map<String, Object> integrationId;
    public CreateIntegrationResult withIntegrationId(java.util.Map<String, Object> integrationId) {
        this.integrationId = integrationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationMethod")
    public java.util.Map<String, Object> integrationMethod;
    public CreateIntegrationResult withIntegrationMethod(java.util.Map<String, Object> integrationMethod) {
        this.integrationMethod = integrationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationResponseSelectionExpression")
    public java.util.Map<String, Object> integrationResponseSelectionExpression;
    public CreateIntegrationResult withIntegrationResponseSelectionExpression(java.util.Map<String, Object> integrationResponseSelectionExpression) {
        this.integrationResponseSelectionExpression = integrationResponseSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationSubtype")
    public java.util.Map<String, Object> integrationSubtype;
    public CreateIntegrationResult withIntegrationSubtype(java.util.Map<String, Object> integrationSubtype) {
        this.integrationSubtype = integrationSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationType")
    public java.util.Map<String, Object> integrationType;
    public CreateIntegrationResult withIntegrationType(java.util.Map<String, Object> integrationType) {
        this.integrationType = integrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationUri")
    public java.util.Map<String, Object> integrationUri;
    public CreateIntegrationResult withIntegrationUri(java.util.Map<String, Object> integrationUri) {
        this.integrationUri = integrationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PassthroughBehavior")
    public java.util.Map<String, Object> passthroughBehavior;
    public CreateIntegrationResult withPassthroughBehavior(java.util.Map<String, Object> passthroughBehavior) {
        this.passthroughBehavior = passthroughBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayloadFormatVersion")
    public java.util.Map<String, Object> payloadFormatVersion;
    public CreateIntegrationResult withPayloadFormatVersion(java.util.Map<String, Object> payloadFormatVersion) {
        this.payloadFormatVersion = payloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestParameters")
    public java.util.Map<String, String> requestParameters;
    public CreateIntegrationResult withRequestParameters(java.util.Map<String, String> requestParameters) {
        this.requestParameters = requestParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestTemplates")
    public java.util.Map<String, String> requestTemplates;
    public CreateIntegrationResult withRequestTemplates(java.util.Map<String, String> requestTemplates) {
        this.requestTemplates = requestTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, java.util.Map<String, String>> responseParameters;
    public CreateIntegrationResult withResponseParameters(java.util.Map<String, java.util.Map<String, String>> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateSelectionExpression")
    public java.util.Map<String, Object> templateSelectionExpression;
    public CreateIntegrationResult withTemplateSelectionExpression(java.util.Map<String, Object> templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeoutInMillis")
    public java.util.Map<String, Object> timeoutInMillis;
    public CreateIntegrationResult withTimeoutInMillis(java.util.Map<String, Object> timeoutInMillis) {
        this.timeoutInMillis = timeoutInMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TlsConfig")
    public CreateIntegrationResultTlsConfig tlsConfig;
    public CreateIntegrationResult withTlsConfig(CreateIntegrationResultTlsConfig tlsConfig) {
        this.tlsConfig = tlsConfig;
        return this;
    }
}