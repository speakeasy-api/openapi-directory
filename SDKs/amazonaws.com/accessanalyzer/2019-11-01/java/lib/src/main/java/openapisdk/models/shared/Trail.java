package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Trail
 * Contains details about the CloudTrail trail being analyzed to generate a policy.
**/
public class Trail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allRegions")
    public Boolean allRegions;
    public Trail withAllRegions(Boolean allRegions) {
        this.allRegions = allRegions;
        return this;
    }
    @JsonProperty("cloudTrailArn")
    public String cloudTrailArn;
    public Trail withCloudTrailArn(String cloudTrailArn) {
        this.cloudTrailArn = cloudTrailArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public Trail withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
}