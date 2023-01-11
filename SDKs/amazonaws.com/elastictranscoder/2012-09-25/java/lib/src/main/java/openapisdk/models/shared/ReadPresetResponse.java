package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadPresetResponse
 * The <code>ReadPresetResponse</code> structure.
**/
public class ReadPresetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Preset")
    public Preset preset;
    public ReadPresetResponse withPreset(Preset preset) {
        this.preset = preset;
        return this;
    }
}