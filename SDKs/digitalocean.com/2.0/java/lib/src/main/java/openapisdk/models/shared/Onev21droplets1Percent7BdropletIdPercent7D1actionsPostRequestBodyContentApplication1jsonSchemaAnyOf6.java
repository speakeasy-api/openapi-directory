package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6
 * Specifies the action that will be taken on the Droplet.
**/
public class Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6TypeEnum type;
    public Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6 withType(Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf6TypeEnum type) {
        this.type = type;
        return this;
    }
}