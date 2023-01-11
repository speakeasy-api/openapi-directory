package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRouteResponseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSelectionExpression")
    public java.util.Map<String, Object> modelSelectionExpression;
    public CreateRouteResponseResponse withModelSelectionExpression(java.util.Map<String, Object> modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseModels")
    public java.util.Map<String, String> responseModels;
    public CreateRouteResponseResponse withResponseModels(java.util.Map<String, String> responseModels) {
        this.responseModels = responseModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, ParameterConstraints> responseParameters;
    public CreateRouteResponseResponse withResponseParameters(java.util.Map<String, ParameterConstraints> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseId")
    public java.util.Map<String, Object> routeResponseId;
    public CreateRouteResponseResponse withRouteResponseId(java.util.Map<String, Object> routeResponseId) {
        this.routeResponseId = routeResponseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseKey")
    public java.util.Map<String, Object> routeResponseKey;
    public CreateRouteResponseResponse withRouteResponseKey(java.util.Map<String, Object> routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
        return this;
    }
}