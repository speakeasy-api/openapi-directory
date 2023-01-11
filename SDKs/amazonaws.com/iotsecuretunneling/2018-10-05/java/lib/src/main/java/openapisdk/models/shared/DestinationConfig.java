package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationConfig
 * The destination configuration.
**/
public class DestinationConfig {
    @JsonProperty("services")
    public String[] services;
    public DestinationConfig withServices(String[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public DestinationConfig withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}