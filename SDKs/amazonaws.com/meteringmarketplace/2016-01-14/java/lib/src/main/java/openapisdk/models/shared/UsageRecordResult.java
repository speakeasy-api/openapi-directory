package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageRecordResult
 * A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage.
**/
public class UsageRecordResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeteringRecordId")
    public String meteringRecordId;
    public UsageRecordResult withMeteringRecordId(String meteringRecordId) {
        this.meteringRecordId = meteringRecordId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public UsageRecordResultStatusEnum status;
    public UsageRecordResult withStatus(UsageRecordResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageRecord")
    public UsageRecord usageRecord;
    public UsageRecordResult withUsageRecord(UsageRecord usageRecord) {
        this.usageRecord = usageRecord;
        return this;
    }
}