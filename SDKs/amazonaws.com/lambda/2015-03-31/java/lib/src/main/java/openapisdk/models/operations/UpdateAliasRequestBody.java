package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAliasRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateAliasRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionVersion")
    public String functionVersion;
    public UpdateAliasRequestBody withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public UpdateAliasRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingConfig")
    public UpdateAliasRequestBodyRoutingConfig routingConfig;
    public UpdateAliasRequestBody withRoutingConfig(UpdateAliasRequestBodyRoutingConfig routingConfig) {
        this.routingConfig = routingConfig;
        return this;
    }
}