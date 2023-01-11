package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeyRequired")
    public Boolean apiKeyRequired;
    public UpdateRouteRequestBody withApiKeyRequired(Boolean apiKeyRequired) {
        this.apiKeyRequired = apiKeyRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationScopes")
    public String[] authorizationScopes;
    public UpdateRouteRequestBody withAuthorizationScopes(String[] authorizationScopes) {
        this.authorizationScopes = authorizationScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationType")
    public UpdateRouteRequestBodyAuthorizationTypeEnum authorizationType;
    public UpdateRouteRequestBody withAuthorizationType(UpdateRouteRequestBodyAuthorizationTypeEnum authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerId")
    public String authorizerId;
    public UpdateRouteRequestBody withAuthorizerId(String authorizerId) {
        this.authorizerId = authorizerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelSelectionExpression")
    public String modelSelectionExpression;
    public UpdateRouteRequestBody withModelSelectionExpression(String modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationName")
    public String operationName;
    public UpdateRouteRequestBody withOperationName(String operationName) {
        this.operationName = operationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestModels")
    public java.util.Map<String, String> requestModels;
    public UpdateRouteRequestBody withRequestModels(java.util.Map<String, String> requestModels) {
        this.requestModels = requestModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestParameters")
    public java.util.Map<String, openapisdk.models.shared.ParameterConstraints> requestParameters;
    public UpdateRouteRequestBody withRequestParameters(java.util.Map<String, openapisdk.models.shared.ParameterConstraints> requestParameters) {
        this.requestParameters = requestParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeKey")
    public String routeKey;
    public UpdateRouteRequestBody withRouteKey(String routeKey) {
        this.routeKey = routeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeResponseSelectionExpression")
    public String routeResponseSelectionExpression;
    public UpdateRouteRequestBody withRouteResponseSelectionExpression(String routeResponseSelectionExpression) {
        this.routeResponseSelectionExpression = routeResponseSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public UpdateRouteRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
}