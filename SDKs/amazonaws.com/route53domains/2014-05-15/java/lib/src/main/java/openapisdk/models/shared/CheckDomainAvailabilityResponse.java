package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckDomainAvailabilityResponse
 * The CheckDomainAvailability response includes the following elements.
**/
public class CheckDomainAvailabilityResponse {
    @JsonProperty("Availability")
    public DomainAvailabilityEnum availability;
    public CheckDomainAvailabilityResponse withAvailability(DomainAvailabilityEnum availability) {
        this.availability = availability;
        return this;
    }
}