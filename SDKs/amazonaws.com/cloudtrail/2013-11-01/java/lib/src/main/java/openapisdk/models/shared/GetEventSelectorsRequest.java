package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEventSelectorsRequest {
    @JsonProperty("TrailName")
    public String trailName;
    public GetEventSelectorsRequest withTrailName(String trailName) {
        this.trailName = trailName;
        return this;
    }
}