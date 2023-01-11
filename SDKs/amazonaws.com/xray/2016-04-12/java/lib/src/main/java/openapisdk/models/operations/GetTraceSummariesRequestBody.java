package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTraceSummariesRequestBody {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTime")
    public OffsetDateTime endTime;
    public GetTraceSummariesRequestBody withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FilterExpression")
    public String filterExpression;
    public GetTraceSummariesRequestBody withFilterExpression(String filterExpression) {
        this.filterExpression = filterExpression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTraceSummariesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sampling")
    public Boolean sampling;
    public GetTraceSummariesRequestBody withSampling(Boolean sampling) {
        this.sampling = sampling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SamplingStrategy")
    public GetTraceSummariesRequestBodySamplingStrategy samplingStrategy;
    public GetTraceSummariesRequestBody withSamplingStrategy(GetTraceSummariesRequestBodySamplingStrategy samplingStrategy) {
        this.samplingStrategy = samplingStrategy;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTime")
    public OffsetDateTime startTime;
    public GetTraceSummariesRequestBody withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeRangeType")
    public GetTraceSummariesRequestBodyTimeRangeTypeEnum timeRangeType;
    public GetTraceSummariesRequestBody withTimeRangeType(GetTraceSummariesRequestBodyTimeRangeTypeEnum timeRangeType) {
        this.timeRangeType = timeRangeType;
        return this;
    }
}