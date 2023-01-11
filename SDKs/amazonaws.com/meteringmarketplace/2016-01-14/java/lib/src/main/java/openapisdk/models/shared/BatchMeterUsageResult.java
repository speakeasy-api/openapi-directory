package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchMeterUsageResult
 * Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error.
**/
public class BatchMeterUsageResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Results")
    public UsageRecordResult[] results;
    public BatchMeterUsageResult withResults(UsageRecordResult[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedRecords")
    public UsageRecord[] unprocessedRecords;
    public BatchMeterUsageResult withUnprocessedRecords(UsageRecord[] unprocessedRecords) {
        this.unprocessedRecords = unprocessedRecords;
        return this;
    }
}