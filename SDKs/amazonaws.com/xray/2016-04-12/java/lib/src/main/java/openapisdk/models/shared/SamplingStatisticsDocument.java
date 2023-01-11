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
 * SamplingStatisticsDocument
 * Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.
**/
public class SamplingStatisticsDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BorrowCount")
    public Long borrowCount;
    public SamplingStatisticsDocument withBorrowCount(Long borrowCount) {
        this.borrowCount = borrowCount;
        return this;
    }
    @JsonProperty("ClientID")
    public String clientID;
    public SamplingStatisticsDocument withClientId(String clientID) {
        this.clientID = clientID;
        return this;
    }
    @JsonProperty("RequestCount")
    public Long requestCount;
    public SamplingStatisticsDocument withRequestCount(Long requestCount) {
        this.requestCount = requestCount;
        return this;
    }
    @JsonProperty("RuleName")
    public String ruleName;
    public SamplingStatisticsDocument withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonProperty("SampledCount")
    public Long sampledCount;
    public SamplingStatisticsDocument withSampledCount(Long sampledCount) {
        this.sampledCount = sampledCount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public SamplingStatisticsDocument withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}