package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Offering
 * Represents the metadata of a device offering.
**/
public class Offering {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Offering withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Offering withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public DevicePlatformEnum platform;
    public Offering withPlatform(DevicePlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurringCharges")
    public RecurringCharge[] recurringCharges;
    public Offering withRecurringCharges(RecurringCharge[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OfferingTypeEnum type;
    public Offering withType(OfferingTypeEnum type) {
        this.type = type;
        return this;
    }
}