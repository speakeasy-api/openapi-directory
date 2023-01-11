package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRouteResponseRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelSelectionExpression")
    public String modelSelectionExpression;
    public CreateRouteResponseRequestBody withModelSelectionExpression(String modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseModels")
    public java.util.Map<String, String> responseModels;
    public CreateRouteResponseRequestBody withResponseModels(java.util.Map<String, String> responseModels) {
        this.responseModels = responseModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseParameters")
    public java.util.Map<String, openapisdk.models.shared.ParameterConstraints> responseParameters;
    public CreateRouteResponseRequestBody withResponseParameters(java.util.Map<String, openapisdk.models.shared.ParameterConstraints> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    @JsonProperty("routeResponseKey")
    public String routeResponseKey;
    public CreateRouteResponseRequestBody withRouteResponseKey(String routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
        return this;
    }
}