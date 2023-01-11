package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public String[] resources;
    public Onev21projects1Percent7BprojectIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}