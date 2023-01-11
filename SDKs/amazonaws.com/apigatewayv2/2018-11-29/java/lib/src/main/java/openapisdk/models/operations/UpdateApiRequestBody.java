package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKeySelectionExpression")
    public String apiKeySelectionExpression;
    public UpdateApiRequestBody withApiKeySelectionExpression(String apiKeySelectionExpression) {
        this.apiKeySelectionExpression = apiKeySelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corsConfiguration")
    public UpdateApiRequestBodyCorsConfiguration corsConfiguration;
    public UpdateApiRequestBody withCorsConfiguration(UpdateApiRequestBodyCorsConfiguration corsConfiguration) {
        this.corsConfiguration = corsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialsArn")
    public String credentialsArn;
    public UpdateApiRequestBody withCredentialsArn(String credentialsArn) {
        this.credentialsArn = credentialsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateApiRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableExecuteApiEndpoint")
    public Boolean disableExecuteApiEndpoint;
    public UpdateApiRequestBody withDisableExecuteApiEndpoint(Boolean disableExecuteApiEndpoint) {
        this.disableExecuteApiEndpoint = disableExecuteApiEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableSchemaValidation")
    public Boolean disableSchemaValidation;
    public UpdateApiRequestBody withDisableSchemaValidation(Boolean disableSchemaValidation) {
        this.disableSchemaValidation = disableSchemaValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateApiRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeKey")
    public String routeKey;
    public UpdateApiRequestBody withRouteKey(String routeKey) {
        this.routeKey = routeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeSelectionExpression")
    public String routeSelectionExpression;
    public UpdateApiRequestBody withRouteSelectionExpression(String routeSelectionExpression) {
        this.routeSelectionExpression = routeSelectionExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public UpdateApiRequestBody withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public UpdateApiRequestBody withVersion(String version) {
        this.version = version;
        return this;
    }
}