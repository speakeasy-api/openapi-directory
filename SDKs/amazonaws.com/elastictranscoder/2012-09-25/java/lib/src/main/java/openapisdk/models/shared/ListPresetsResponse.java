package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPresetsResponse
 * The <code>ListPresetsResponse</code> structure.
**/
public class ListPresetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListPresetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Presets")
    public Preset[] presets;
    public ListPresetsResponse withPresets(Preset[] presets) {
        this.presets = presets;
        return this;
    }
}