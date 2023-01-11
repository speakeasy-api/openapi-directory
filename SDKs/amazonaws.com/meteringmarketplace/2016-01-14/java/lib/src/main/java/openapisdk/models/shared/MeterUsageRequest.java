package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MeterUsageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public MeterUsageRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("ProductCode")
    public String productCode;
    public MeterUsageRequest withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public MeterUsageRequest withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageAllocations")
    public UsageAllocation[] usageAllocations;
    public MeterUsageRequest withUsageAllocations(UsageAllocation[] usageAllocations) {
        this.usageAllocations = usageAllocations;
        return this;
    }
    @JsonProperty("UsageDimension")
    public String usageDimension;
    public MeterUsageRequest withUsageDimension(String usageDimension) {
        this.usageDimension = usageDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageQuantity")
    public Long usageQuantity;
    public MeterUsageRequest withUsageQuantity(Long usageQuantity) {
        this.usageQuantity = usageQuantity;
        return this;
    }
}