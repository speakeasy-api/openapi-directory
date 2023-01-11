package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInsightSelectorsRequest {
    @JsonProperty("TrailName")
    public String trailName;
    public GetInsightSelectorsRequest withTrailName(String trailName) {
        this.trailName = trailName;
        return this;
    }
}