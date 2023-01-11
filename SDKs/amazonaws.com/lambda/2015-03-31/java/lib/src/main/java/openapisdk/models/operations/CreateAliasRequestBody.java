package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateAliasRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("FunctionVersion")
    public String functionVersion;
    public CreateAliasRequestBody withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateAliasRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingConfig")
    public CreateAliasRequestBodyRoutingConfig routingConfig;
    public CreateAliasRequestBody withRoutingConfig(CreateAliasRequestBodyRoutingConfig routingConfig) {
        this.routingConfig = routingConfig;
        return this;
    }
}