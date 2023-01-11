package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SamplingStatisticSummary
 * Aggregated request sampling data for a sampling rule across all services for a 10-second window.
**/
public class SamplingStatisticSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BorrowCount")
    public Long borrowCount;
    public SamplingStatisticSummary withBorrowCount(Long borrowCount) {
        this.borrowCount = borrowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestCount")
    public Long requestCount;
    public SamplingStatisticSummary withRequestCount(Long requestCount) {
        this.requestCount = requestCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RuleName")
    public String ruleName;
    public SamplingStatisticSummary withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampledCount")
    public Long sampledCount;
    public SamplingStatisticSummary withSampledCount(Long sampledCount) {
        this.sampledCount = sampledCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public SamplingStatisticSummary withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}