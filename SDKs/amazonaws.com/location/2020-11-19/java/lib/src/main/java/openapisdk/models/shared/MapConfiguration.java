package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MapConfiguration
 * Specifies the map tile style selected from an available provider.
**/
public class MapConfiguration {
    @JsonProperty("Style")
    public String style;
    public MapConfiguration withStyle(String style) {
        this.style = style;
        return this;
    }
}