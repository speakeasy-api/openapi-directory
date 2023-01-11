package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetApiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiEndpoint")
    public java.util.Map<String, Object> apiEndpoint;
    public GetApiResponse withApiEndpoint(java.util.Map<String, Object> apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public GetApiResponse withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiId")
    public java.util.Map<String, Object> apiId;
    public GetApiResponse withApiId(java.util.Map<String, Object> apiId) {
        this.apiId = apiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeySelectionExpression")
    public java.util.Map<String, Object> apiKeySelectionExpression;
    public GetApiResponse withApiKeySelectionExpression(java.util.Map<String, Object> apiKeySelectionExpression) {
        this.apiKeySelectionExpression = apiKeySelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CorsConfiguration")
    public GetApiResponseCorsConfiguration corsConfiguration;
    public GetApiResponse withCorsConfiguration(GetApiResponseCorsConfiguration corsConfiguration) {
        this.corsConfiguration = corsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public GetApiResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public GetApiResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableExecuteApiEndpoint")
    public java.util.Map<String, Object> disableExecuteApiEndpoint;
    public GetApiResponse withDisableExecuteApiEndpoint(java.util.Map<String, Object> disableExecuteApiEndpoint) {
        this.disableExecuteApiEndpoint = disableExecuteApiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableSchemaValidation")
    public java.util.Map<String, Object> disableSchemaValidation;
    public GetApiResponse withDisableSchemaValidation(java.util.Map<String, Object> disableSchemaValidation) {
        this.disableSchemaValidation = disableSchemaValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportInfo")
    public java.util.Map<String, Object> importInfo;
    public GetApiResponse withImportInfo(java.util.Map<String, Object> importInfo) {
        this.importInfo = importInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public GetApiResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolType")
    public java.util.Map<String, Object> protocolType;
    public GetApiResponse withProtocolType(java.util.Map<String, Object> protocolType) {
        this.protocolType = protocolType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteSelectionExpression")
    public java.util.Map<String, Object> routeSelectionExpression;
    public GetApiResponse withRouteSelectionExpression(java.util.Map<String, Object> routeSelectionExpression) {
        this.routeSelectionExpression = routeSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public GetApiResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public java.util.Map<String, Object> version;
    public GetApiResponse withVersion(java.util.Map<String, Object> version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public java.util.Map<String, Object> warnings;
    public GetApiResponse withWarnings(java.util.Map<String, Object> warnings) {
        this.warnings = warnings;
        return this;
    }
}