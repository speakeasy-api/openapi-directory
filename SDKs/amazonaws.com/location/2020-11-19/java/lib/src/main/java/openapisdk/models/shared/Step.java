package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Step
 *  Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg. 
**/
public class Step {
    @JsonProperty("Distance")
    public Double distance;
    public Step withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonProperty("DurationSeconds")
    public Double durationSeconds;
    public Step withDurationSeconds(Double durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    }
    @JsonProperty("EndPosition")
    public Double[] endPosition;
    public Step withEndPosition(Double[] endPosition) {
        this.endPosition = endPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeometryOffset")
    public Long geometryOffset;
    public Step withGeometryOffset(Long geometryOffset) {
        this.geometryOffset = geometryOffset;
        return this;
    }
    @JsonProperty("StartPosition")
    public Double[] startPosition;
    public Step withStartPosition(Double[] startPosition) {
        this.startPosition = startPosition;
        return this;
    }
}