package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AirbyteCatalog
 * describes the available schema (catalog).
**/
public class AirbyteCatalog {
    @JsonProperty("streams")
    public AirbyteStreamAndConfiguration[] streams;
    public AirbyteCatalog withStreams(AirbyteStreamAndConfiguration[] streams) {
        this.streams = streams;
        return this;
    }
}