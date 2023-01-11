package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AirbyteStreamAndConfiguration
 * each stream is split in two parts; the immutable schema from source and mutable configuration for destination
**/
public class AirbyteStreamAndConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public AirbyteStreamConfiguration config;
    public AirbyteStreamAndConfiguration withConfig(AirbyteStreamConfiguration config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public AirbyteStream stream;
    public AirbyteStreamAndConfiguration withStream(AirbyteStream stream) {
        this.stream = stream;
        return this;
    }
}