package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListInferenceExecutionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DataEndTimeBefore")
    public OffsetDateTime dataEndTimeBefore;
    public ListInferenceExecutionsRequest withDataEndTimeBefore(OffsetDateTime dataEndTimeBefore) {
        this.dataEndTimeBefore = dataEndTimeBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DataStartTimeAfter")
    public OffsetDateTime dataStartTimeAfter;
    public ListInferenceExecutionsRequest withDataStartTimeAfter(OffsetDateTime dataStartTimeAfter) {
        this.dataStartTimeAfter = dataStartTimeAfter;
        return this;
    }
    @JsonProperty("InferenceSchedulerName")
    public String inferenceSchedulerName;
    public ListInferenceExecutionsRequest withInferenceSchedulerName(String inferenceSchedulerName) {
        this.inferenceSchedulerName = inferenceSchedulerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListInferenceExecutionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListInferenceExecutionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public InferenceExecutionStatusEnum status;
    public ListInferenceExecutionsRequest withStatus(InferenceExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
}