package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorldConfig
 * Configuration information for a world.
**/
public class WorldConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("world")
    public String world;
    public WorldConfig withWorld(String world) {
        this.world = world;
        return this;
    }
}