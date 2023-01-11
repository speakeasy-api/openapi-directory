package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Match
 * The part of a profile that contains a recommendation found during analysis.
**/
public class Match {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameAddress")
    public String frameAddress;
    public Match withFrameAddress(String frameAddress) {
        this.frameAddress = frameAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetFramesIndex")
    public Long targetFramesIndex;
    public Match withTargetFramesIndex(Long targetFramesIndex) {
        this.targetFramesIndex = targetFramesIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdBreachValue")
    public Double thresholdBreachValue;
    public Match withThresholdBreachValue(Double thresholdBreachValue) {
        this.thresholdBreachValue = thresholdBreachValue;
        return this;
    }
}