package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageAllocation
 * <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each UsageAllocation indicates the usage quantity for a specific set of tags.</p>
**/
public class UsageAllocation {
    @JsonProperty("AllocatedUsageQuantity")
    public Long allocatedUsageQuantity;
    public UsageAllocation withAllocatedUsageQuantity(Long allocatedUsageQuantity) {
        this.allocatedUsageQuantity = allocatedUsageQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public UsageAllocation withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}