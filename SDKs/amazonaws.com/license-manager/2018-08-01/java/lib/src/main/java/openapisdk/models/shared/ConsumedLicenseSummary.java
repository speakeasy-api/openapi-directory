package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsumedLicenseSummary
 * Details about license consumption.
**/
public class ConsumedLicenseSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedLicenses")
    public Long consumedLicenses;
    public ConsumedLicenseSummary withConsumedLicenses(Long consumedLicenses) {
        this.consumedLicenses = consumedLicenses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public ConsumedLicenseSummary withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}