package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRouteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public CreateRouteResult withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeyRequired")
    public java.util.Map<String, Object> apiKeyRequired;
    public CreateRouteResult withApiKeyRequired(java.util.Map<String, Object> apiKeyRequired) {
        this.apiKeyRequired = apiKeyRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationScopes")
    public java.util.Map<String, Object> authorizationScopes;
    public CreateRouteResult withAuthorizationScopes(java.util.Map<String, Object> authorizationScopes) {
        this.authorizationScopes = authorizationScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizationType")
    public java.util.Map<String, Object> authorizationType;
    public CreateRouteResult withAuthorizationType(java.util.Map<String, Object> authorizationType) {
        this.authorizationType = authorizationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizerId")
    public java.util.Map<String, Object> authorizerId;
    public CreateRouteResult withAuthorizerId(java.util.Map<String, Object> authorizerId) {
        this.authorizerId = authorizerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSelectionExpression")
    public java.util.Map<String, Object> modelSelectionExpression;
    public CreateRouteResult withModelSelectionExpression(java.util.Map<String, Object> modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OperationName")
    public java.util.Map<String, Object> operationName;
    public CreateRouteResult withOperationName(java.util.Map<String, Object> operationName) {
        this.operationName = operationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestModels")
    public java.util.Map<String, String> requestModels;
    public CreateRouteResult withRequestModels(java.util.Map<String, String> requestModels) {
        this.requestModels = requestModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestParameters")
    public java.util.Map<String, ParameterConstraints> requestParameters;
    public CreateRouteResult withRequestParameters(java.util.Map<String, ParameterConstraints> requestParameters) {
        this.requestParameters = requestParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteId")
    public java.util.Map<String, Object> routeId;
    public CreateRouteResult withRouteId(java.util.Map<String, Object> routeId) {
        this.routeId = routeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteKey")
    public java.util.Map<String, Object> routeKey;
    public CreateRouteResult withRouteKey(java.util.Map<String, Object> routeKey) {
        this.routeKey = routeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseSelectionExpression")
    public java.util.Map<String, Object> routeResponseSelectionExpression;
    public CreateRouteResult withRouteResponseSelectionExpression(java.util.Map<String, Object> routeResponseSelectionExpression) {
        this.routeResponseSelectionExpression = routeResponseSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public java.util.Map<String, Object> target;
    public CreateRouteResult withTarget(java.util.Map<String, Object> target) {
        this.target = target;
        return this;
    }
}