package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIntegrationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public UpdateIntegrationRequestBody withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionType")
    public UpdateIntegrationRequestBodyConnectionTypeEnum connectionType;
    public UpdateIntegrationRequestBody withConnectionType(UpdateIntegrationRequestBodyConnectionTypeEnum connectionType) {
        this.connectionType = connectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentHandlingStrategy")
    public UpdateIntegrationRequestBodyContentHandlingStrategyEnum contentHandlingStrategy;
    public UpdateIntegrationRequestBody withContentHandlingStrategy(UpdateIntegrationRequestBodyContentHandlingStrategyEnum contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialsArn")
    public String credentialsArn;
    public UpdateIntegrationRequestBody withCredentialsArn(String credentialsArn) {
        this.credentialsArn = credentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateIntegrationRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationMethod")
    public String integrationMethod;
    public UpdateIntegrationRequestBody withIntegrationMethod(String integrationMethod) {
        this.integrationMethod = integrationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationSubtype")
    public String integrationSubtype;
    public UpdateIntegrationRequestBody withIntegrationSubtype(String integrationSubtype) {
        this.integrationSubtype = integrationSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationType")
    public UpdateIntegrationRequestBodyIntegrationTypeEnum integrationType;
    public UpdateIntegrationRequestBody withIntegrationType(UpdateIntegrationRequestBodyIntegrationTypeEnum integrationType) {
        this.integrationType = integrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationUri")
    public String integrationUri;
    public UpdateIntegrationRequestBody withIntegrationUri(String integrationUri) {
        this.integrationUri = integrationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passthroughBehavior")
    public UpdateIntegrationRequestBodyPassthroughBehaviorEnum passthroughBehavior;
    public UpdateIntegrationRequestBody withPassthroughBehavior(UpdateIntegrationRequestBodyPassthroughBehaviorEnum passthroughBehavior) {
        this.passthroughBehavior = passthroughBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadFormatVersion")
    public String payloadFormatVersion;
    public UpdateIntegrationRequestBody withPayloadFormatVersion(String payloadFormatVersion) {
        this.payloadFormatVersion = payloadFormatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestParameters")
    public java.util.Map<String, String> requestParameters;
    public UpdateIntegrationRequestBody withRequestParameters(java.util.Map<String, String> requestParameters) {
        this.requestParameters = requestParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestTemplates")
    public java.util.Map<String, String> requestTemplates;
    public UpdateIntegrationRequestBody withRequestTemplates(java.util.Map<String, String> requestTemplates) {
        this.requestTemplates = requestTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, java.util.Map<String, String>> responseParameters;
    public UpdateIntegrationRequestBody withResponseParameters(java.util.Map<String, java.util.Map<String, String>> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateSelectionExpression")
    public String templateSelectionExpression;
    public UpdateIntegrationRequestBody withTemplateSelectionExpression(String templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutInMillis")
    public Long timeoutInMillis;
    public UpdateIntegrationRequestBody withTimeoutInMillis(Long timeoutInMillis) {
        this.timeoutInMillis = timeoutInMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsConfig")
    public UpdateIntegrationRequestBodyTlsConfig tlsConfig;
    public UpdateIntegrationRequestBody withTlsConfig(UpdateIntegrationRequestBodyTlsConfig tlsConfig) {
        this.tlsConfig = tlsConfig;
        return this;
    }
}