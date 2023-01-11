package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeySelectionExpression")
    public String apiKeySelectionExpression;
    public CreateApiRequestBody withApiKeySelectionExpression(String apiKeySelectionExpression) {
        this.apiKeySelectionExpression = apiKeySelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corsConfiguration")
    public CreateApiRequestBodyCorsConfiguration corsConfiguration;
    public CreateApiRequestBody withCorsConfiguration(CreateApiRequestBodyCorsConfiguration corsConfiguration) {
        this.corsConfiguration = corsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialsArn")
    public String credentialsArn;
    public CreateApiRequestBody withCredentialsArn(String credentialsArn) {
        this.credentialsArn = credentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateApiRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableExecuteApiEndpoint")
    public Boolean disableExecuteApiEndpoint;
    public CreateApiRequestBody withDisableExecuteApiEndpoint(Boolean disableExecuteApiEndpoint) {
        this.disableExecuteApiEndpoint = disableExecuteApiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableSchemaValidation")
    public Boolean disableSchemaValidation;
    public CreateApiRequestBody withDisableSchemaValidation(Boolean disableSchemaValidation) {
        this.disableSchemaValidation = disableSchemaValidation;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateApiRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("protocolType")
    public CreateApiRequestBodyProtocolTypeEnum protocolType;
    public CreateApiRequestBody withProtocolType(CreateApiRequestBodyProtocolTypeEnum protocolType) {
        this.protocolType = protocolType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeKey")
    public String routeKey;
    public CreateApiRequestBody withRouteKey(String routeKey) {
        this.routeKey = routeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeSelectionExpression")
    public String routeSelectionExpression;
    public CreateApiRequestBody withRouteSelectionExpression(String routeSelectionExpression) {
        this.routeSelectionExpression = routeSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateApiRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public CreateApiRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public CreateApiRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}