package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateIntegrationResponseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentHandlingStrategy")
    public CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum contentHandlingStrategy;
    public CreateIntegrationResponseRequestBody withContentHandlingStrategy(CreateIntegrationResponseRequestBodyContentHandlingStrategyEnum contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonProperty("integrationResponseKey")
    public String integrationResponseKey;
    public CreateIntegrationResponseRequestBody withIntegrationResponseKey(String integrationResponseKey) {
        this.integrationResponseKey = integrationResponseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, String> responseParameters;
    public CreateIntegrationResponseRequestBody withResponseParameters(java.util.Map<String, String> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseTemplates")
    public java.util.Map<String, String> responseTemplates;
    public CreateIntegrationResponseRequestBody withResponseTemplates(java.util.Map<String, String> responseTemplates) {
        this.responseTemplates = responseTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateSelectionExpression")
    public String templateSelectionExpression;
    public CreateIntegrationResponseRequestBody withTemplateSelectionExpression(String templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
}