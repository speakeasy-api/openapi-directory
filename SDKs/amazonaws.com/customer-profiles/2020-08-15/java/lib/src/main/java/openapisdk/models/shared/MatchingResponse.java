package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchingResponse
 * The flag that enables the matching process of duplicate profiles.
**/
public class MatchingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public MatchingResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}