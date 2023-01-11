package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BatchGetFrameMetricDataResponse
 * The structure representing the BatchGetFrameMetricDataResponse.
**/
public class BatchGetFrameMetricDataResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public BatchGetFrameMetricDataResponse withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("endTimes")
    public TimestampStructure[] endTimes;
    public BatchGetFrameMetricDataResponse withEndTimes(TimestampStructure[] endTimes) {
        this.endTimes = endTimes;
        return this;
    }
    @JsonProperty("frameMetricData")
    public FrameMetricDatum[] frameMetricData;
    public BatchGetFrameMetricDataResponse withFrameMetricData(FrameMetricDatum[] frameMetricData) {
        this.frameMetricData = frameMetricData;
        return this;
    }
    @JsonProperty("resolution")
    public AggregationPeriodEnum resolution;
    public BatchGetFrameMetricDataResponse withResolution(AggregationPeriodEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public BatchGetFrameMetricDataResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonProperty("unprocessedEndTimes")
    public java.util.Map<String, TimestampStructure[]> unprocessedEndTimes;
    public BatchGetFrameMetricDataResponse withUnprocessedEndTimes(java.util.Map<String, TimestampStructure[]> unprocessedEndTimes) {
        this.unprocessedEndTimes = unprocessedEndTimes;
        return this;
    }
}