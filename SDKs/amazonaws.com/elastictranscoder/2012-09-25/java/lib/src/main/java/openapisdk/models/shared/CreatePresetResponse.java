package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePresetResponse
 * The <code>CreatePresetResponse</code> structure.
**/
public class CreatePresetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Preset")
    public Preset preset;
    public CreatePresetResponse withPreset(Preset preset) {
        this.preset = preset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Warning")
    public String warning;
    public CreatePresetResponse withWarning(String warning) {
        this.warning = warning;
        return this;
    }
}