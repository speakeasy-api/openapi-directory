package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScoreTrackPoint
 * A track synchronization point
**/
public class ScoreTrackPoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measureUuid")
    public String measureUuid;
    public ScoreTrackPoint withMeasureUuid(String measureUuid) {
        this.measureUuid = measureUuid;
        return this;
    }
    @JsonProperty("time")
    public Double time;
    public ScoreTrackPoint withTime(Double time) {
        this.time = time;
        return this;
    }
    @JsonProperty("type")
    public ScoreTrackPointTypeEnum type;
    public ScoreTrackPoint withType(ScoreTrackPointTypeEnum type) {
        this.type = type;
        return this;
    }
}