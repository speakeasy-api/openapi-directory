package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIntegrationResponseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentHandlingStrategy")
    public UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum contentHandlingStrategy;
    public UpdateIntegrationResponseRequestBody withContentHandlingStrategy(UpdateIntegrationResponseRequestBodyContentHandlingStrategyEnum contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationResponseKey")
    public String integrationResponseKey;
    public UpdateIntegrationResponseRequestBody withIntegrationResponseKey(String integrationResponseKey) {
        this.integrationResponseKey = integrationResponseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, String> responseParameters;
    public UpdateIntegrationResponseRequestBody withResponseParameters(java.util.Map<String, String> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseTemplates")
    public java.util.Map<String, String> responseTemplates;
    public UpdateIntegrationResponseRequestBody withResponseTemplates(java.util.Map<String, String> responseTemplates) {
        this.responseTemplates = responseTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateSelectionExpression")
    public String templateSelectionExpression;
    public UpdateIntegrationResponseRequestBody withTemplateSelectionExpression(String templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
}