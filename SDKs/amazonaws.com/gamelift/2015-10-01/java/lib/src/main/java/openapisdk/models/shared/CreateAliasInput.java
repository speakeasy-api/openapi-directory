package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAliasInput
 * Represents the input for a request operation.
**/
public class CreateAliasInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateAliasInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateAliasInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RoutingStrategy")
    public RoutingStrategy routingStrategy;
    public CreateAliasInput withRoutingStrategy(RoutingStrategy routingStrategy) {
        this.routingStrategy = routingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateAliasInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}