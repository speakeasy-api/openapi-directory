package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchMeterUsageRequest
 * A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application.
**/
public class BatchMeterUsageRequest {
    @JsonProperty("ProductCode")
    public String productCode;
    public BatchMeterUsageRequest withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonProperty("UsageRecords")
    public UsageRecord[] usageRecords;
    public BatchMeterUsageRequest withUsageRecords(UsageRecord[] usageRecords) {
        this.usageRecords = usageRecords;
        return this;
    }
}