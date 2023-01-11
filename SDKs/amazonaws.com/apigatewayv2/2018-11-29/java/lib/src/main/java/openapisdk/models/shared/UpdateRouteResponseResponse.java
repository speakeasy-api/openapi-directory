package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRouteResponseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSelectionExpression")
    public java.util.Map<String, Object> modelSelectionExpression;
    public UpdateRouteResponseResponse withModelSelectionExpression(java.util.Map<String, Object> modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseModels")
    public java.util.Map<String, String> responseModels;
    public UpdateRouteResponseResponse withResponseModels(java.util.Map<String, String> responseModels) {
        this.responseModels = responseModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, ParameterConstraints> responseParameters;
    public UpdateRouteResponseResponse withResponseParameters(java.util.Map<String, ParameterConstraints> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseId")
    public java.util.Map<String, Object> routeResponseId;
    public UpdateRouteResponseResponse withRouteResponseId(java.util.Map<String, Object> routeResponseId) {
        this.routeResponseId = routeResponseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseKey")
    public java.util.Map<String, Object> routeResponseKey;
    public UpdateRouteResponseResponse withRouteResponseKey(java.util.Map<String, Object> routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
        return this;
    }
}