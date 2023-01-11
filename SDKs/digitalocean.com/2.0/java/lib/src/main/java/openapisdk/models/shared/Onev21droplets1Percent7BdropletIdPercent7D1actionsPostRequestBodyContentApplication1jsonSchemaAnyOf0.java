package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0
 * Specifies the action that will be taken on the Droplet.
**/
public class Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 {
    @JsonProperty("type")
    public Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum type;
    public Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 withType(Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum type) {
        this.type = type;
        return this;
    }
}