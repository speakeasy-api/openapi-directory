package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetTraceSummariesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ApproximateTime")
    public OffsetDateTime approximateTime;
    public GetTraceSummariesResult withApproximateTime(OffsetDateTime approximateTime) {
        this.approximateTime = approximateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetTraceSummariesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TraceSummaries")
    public TraceSummary[] traceSummaries;
    public GetTraceSummariesResult withTraceSummaries(TraceSummary[] traceSummaries) {
        this.traceSummaries = traceSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TracesProcessedCount")
    public Long tracesProcessedCount;
    public GetTraceSummariesResult withTracesProcessedCount(Long tracesProcessedCount) {
        this.tracesProcessedCount = tracesProcessedCount;
        return this;
    }
}