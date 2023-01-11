package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrailInfo
 * Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
**/
public class TrailInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public TrailInfo withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public TrailInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailARN")
    public String trailARN;
    public TrailInfo withTrailArn(String trailARN) {
        this.trailARN = trailARN;
        return this;
    }
}