package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Recommendation
 * A potential improvement that was found from analyzing the profiling data.
**/
public class Recommendation {
    @JsonProperty("allMatchesCount")
    public Long allMatchesCount;
    public Recommendation withAllMatchesCount(Long allMatchesCount) {
        this.allMatchesCount = allMatchesCount;
        return this;
    }
    @JsonProperty("allMatchesSum")
    public Double allMatchesSum;
    public Recommendation withAllMatchesSum(Double allMatchesSum) {
        this.allMatchesSum = allMatchesSum;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public Recommendation withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("pattern")
    public Pattern pattern;
    public Recommendation withPattern(Pattern pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public Recommendation withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("topMatches")
    public Match[] topMatches;
    public Recommendation withTopMatches(Match[] topMatches) {
        this.topMatches = topMatches;
        return this;
    }
}