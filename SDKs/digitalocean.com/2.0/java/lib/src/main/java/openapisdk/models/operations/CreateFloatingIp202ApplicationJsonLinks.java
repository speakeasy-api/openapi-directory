package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFloatingIp202ApplicationJsonLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public openapisdk.models.shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[] actions;
    public CreateFloatingIp202ApplicationJsonLinks withActions(openapisdk.models.shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplets")
    public openapisdk.models.shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[] droplets;
    public CreateFloatingIp202ApplicationJsonLinks withDroplets(openapisdk.models.shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems[] droplets) {
        this.droplets = droplets;
        return this;
    }
}