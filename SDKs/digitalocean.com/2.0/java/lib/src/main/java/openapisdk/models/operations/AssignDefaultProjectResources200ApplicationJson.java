package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignDefaultProjectResources200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public openapisdk.models.shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[] resources;
    public AssignDefaultProjectResources200ApplicationJson withResources(openapisdk.models.shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[] resources) {
        this.resources = resources;
        return this;
    }
}