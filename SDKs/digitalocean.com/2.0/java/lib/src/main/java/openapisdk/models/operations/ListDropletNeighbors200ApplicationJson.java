package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletNeighbors200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplets")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems[] droplets;
    public ListDropletNeighbors200ApplicationJson withDroplets(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems[] droplets) {
        this.droplets = droplets;
        return this;
    }
}