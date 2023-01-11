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
 * UsageRecord
 * <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p>
**/
public class UsageRecord {
    @JsonProperty("CustomerIdentifier")
    public String customerIdentifier;
    public UsageRecord withCustomerIdentifier(String customerIdentifier) {
        this.customerIdentifier = customerIdentifier;
        return this;
    }
    @JsonProperty("Dimension")
    public String dimension;
    public UsageRecord withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quantity")
    public Long quantity;
    public UsageRecord withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Timestamp")
    public OffsetDateTime timestamp;
    public UsageRecord withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UsageAllocations")
    public UsageAllocation[] usageAllocations;
    public UsageRecord withUsageAllocations(UsageAllocation[] usageAllocations) {
        this.usageAllocations = usageAllocations;
        return this;
    }
}