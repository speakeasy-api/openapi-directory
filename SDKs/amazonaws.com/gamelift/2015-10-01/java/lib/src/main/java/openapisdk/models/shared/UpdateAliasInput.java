package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAliasInput
 * Represents the input for a request operation.
**/
public class UpdateAliasInput {
    @JsonProperty("AliasId")
    public String aliasId;
    public UpdateAliasInput withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateAliasInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateAliasInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingStrategy")
    public RoutingStrategy routingStrategy;
    public UpdateAliasInput withRoutingStrategy(RoutingStrategy routingStrategy) {
        this.routingStrategy = routingStrategy;
        return this;
    }
}