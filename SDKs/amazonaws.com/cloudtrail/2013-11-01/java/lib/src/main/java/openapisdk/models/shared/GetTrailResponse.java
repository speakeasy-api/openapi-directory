package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTrailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Trail")
    public Trail trail;
    public GetTrailResponse withTrail(Trail trail) {
        this.trail = trail;
        return this;
    }
}