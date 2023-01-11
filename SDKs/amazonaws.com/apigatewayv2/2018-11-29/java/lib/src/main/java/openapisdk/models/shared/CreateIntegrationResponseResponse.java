package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIntegrationResponseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentHandlingStrategy")
    public java.util.Map<String, Object> contentHandlingStrategy;
    public CreateIntegrationResponseResponse withContentHandlingStrategy(java.util.Map<String, Object> contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationResponseId")
    public java.util.Map<String, Object> integrationResponseId;
    public CreateIntegrationResponseResponse withIntegrationResponseId(java.util.Map<String, Object> integrationResponseId) {
        this.integrationResponseId = integrationResponseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationResponseKey")
    public java.util.Map<String, Object> integrationResponseKey;
    public CreateIntegrationResponseResponse withIntegrationResponseKey(java.util.Map<String, Object> integrationResponseKey) {
        this.integrationResponseKey = integrationResponseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, String> responseParameters;
    public CreateIntegrationResponseResponse withResponseParameters(java.util.Map<String, String> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseTemplates")
    public java.util.Map<String, String> responseTemplates;
    public CreateIntegrationResponseResponse withResponseTemplates(java.util.Map<String, String> responseTemplates) {
        this.responseTemplates = responseTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateSelectionExpression")
    public java.util.Map<String, Object> templateSelectionExpression;
    public CreateIntegrationResponseResponse withTemplateSelectionExpression(java.util.Map<String, Object> templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
}