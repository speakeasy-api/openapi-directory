package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiEndpoint")
    public java.util.Map<String, Object> apiEndpoint;
    public CreateApiResponse withApiEndpoint(java.util.Map<String, Object> apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayManaged")
    public java.util.Map<String, Object> apiGatewayManaged;
    public CreateApiResponse withApiGatewayManaged(java.util.Map<String, Object> apiGatewayManaged) {
        this.apiGatewayManaged = apiGatewayManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiId")
    public java.util.Map<String, Object> apiId;
    public CreateApiResponse withApiId(java.util.Map<String, Object> apiId) {
        this.apiId = apiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiKeySelectionExpression")
    public java.util.Map<String, Object> apiKeySelectionExpression;
    public CreateApiResponse withApiKeySelectionExpression(java.util.Map<String, Object> apiKeySelectionExpression) {
        this.apiKeySelectionExpression = apiKeySelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CorsConfiguration")
    public CreateApiResponseCorsConfiguration corsConfiguration;
    public CreateApiResponse withCorsConfiguration(CreateApiResponseCorsConfiguration corsConfiguration) {
        this.corsConfiguration = corsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedDate")
    public java.util.Map<String, Object> createdDate;
    public CreateApiResponse withCreatedDate(java.util.Map<String, Object> createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public CreateApiResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableExecuteApiEndpoint")
    public java.util.Map<String, Object> disableExecuteApiEndpoint;
    public CreateApiResponse withDisableExecuteApiEndpoint(java.util.Map<String, Object> disableExecuteApiEndpoint) {
        this.disableExecuteApiEndpoint = disableExecuteApiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableSchemaValidation")
    public java.util.Map<String, Object> disableSchemaValidation;
    public CreateApiResponse withDisableSchemaValidation(java.util.Map<String, Object> disableSchemaValidation) {
        this.disableSchemaValidation = disableSchemaValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportInfo")
    public java.util.Map<String, Object> importInfo;
    public CreateApiResponse withImportInfo(java.util.Map<String, Object> importInfo) {
        this.importInfo = importInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public CreateApiResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtocolType")
    public java.util.Map<String, Object> protocolType;
    public CreateApiResponse withProtocolType(java.util.Map<String, Object> protocolType) {
        this.protocolType = protocolType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteSelectionExpression")
    public java.util.Map<String, Object> routeSelectionExpression;
    public CreateApiResponse withRouteSelectionExpression(java.util.Map<String, Object> routeSelectionExpression) {
        this.routeSelectionExpression = routeSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateApiResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public java.util.Map<String, Object> version;
    public CreateApiResponse withVersion(java.util.Map<String, Object> version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warnings")
    public java.util.Map<String, Object> warnings;
    public CreateApiResponse withWarnings(java.util.Map<String, Object> warnings) {
        this.warnings = warnings;
        return this;
    }
}