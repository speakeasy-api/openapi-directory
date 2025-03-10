/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetIntegrationResponseResponse - Success
 */
public class GetIntegrationResponseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentHandlingStrategy")
    public GetIntegrationResponseResponseContentHandlingStrategyEnum contentHandlingStrategy;

    public GetIntegrationResponseResponse withContentHandlingStrategy(GetIntegrationResponseResponseContentHandlingStrategyEnum contentHandlingStrategy) {
        this.contentHandlingStrategy = contentHandlingStrategy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationResponseId")
    public String integrationResponseId;

    public GetIntegrationResponseResponse withIntegrationResponseId(String integrationResponseId) {
        this.integrationResponseId = integrationResponseId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegrationResponseKey")
    public String integrationResponseKey;

    public GetIntegrationResponseResponse withIntegrationResponseKey(String integrationResponseKey) {
        this.integrationResponseKey = integrationResponseKey;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, String> responseParameters;

    public GetIntegrationResponseResponse withResponseParameters(java.util.Map<String, String> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseTemplates")
    public java.util.Map<String, String> responseTemplates;

    public GetIntegrationResponseResponse withResponseTemplates(java.util.Map<String, String> responseTemplates) {
        this.responseTemplates = responseTemplates;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateSelectionExpression")
    public String templateSelectionExpression;

    public GetIntegrationResponseResponse withTemplateSelectionExpression(String templateSelectionExpression) {
        this.templateSelectionExpression = templateSelectionExpression;
        return this;
    }
    
    public GetIntegrationResponseResponse(){}
}
