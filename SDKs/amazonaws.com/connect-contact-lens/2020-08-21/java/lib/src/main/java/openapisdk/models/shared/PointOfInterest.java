package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PointOfInterest
 * The section of the contact audio where that category rule was detected.
**/
public class PointOfInterest {
    @JsonProperty("BeginOffsetMillis")
    public Long beginOffsetMillis;
    public PointOfInterest withBeginOffsetMillis(Long beginOffsetMillis) {
        this.beginOffsetMillis = beginOffsetMillis;
        return this;
    }
    @JsonProperty("EndOffsetMillis")
    public Long endOffsetMillis;
    public PointOfInterest withEndOffsetMillis(Long endOffsetMillis) {
        this.endOffsetMillis = endOffsetMillis;
        return this;
    }
}