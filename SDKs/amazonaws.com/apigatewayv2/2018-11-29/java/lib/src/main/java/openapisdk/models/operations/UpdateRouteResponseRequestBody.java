package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRouteResponseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelSelectionExpression")
    public String modelSelectionExpression;
    public UpdateRouteResponseRequestBody withModelSelectionExpression(String modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseModels")
    public java.util.Map<String, String> responseModels;
    public UpdateRouteResponseRequestBody withResponseModels(java.util.Map<String, String> responseModels) {
        this.responseModels = responseModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, openapisdk.models.shared.ParameterConstraints> responseParameters;
    public UpdateRouteResponseRequestBody withResponseParameters(java.util.Map<String, openapisdk.models.shared.ParameterConstraints> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeResponseKey")
    public String routeResponseKey;
    public UpdateRouteResponseRequestBody withRouteResponseKey(String routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
        return this;
    }
}