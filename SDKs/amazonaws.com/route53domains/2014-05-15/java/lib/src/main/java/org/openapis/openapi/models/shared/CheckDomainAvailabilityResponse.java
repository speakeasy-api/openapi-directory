/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CheckDomainAvailabilityResponse - The CheckDomainAvailability response includes the following elements.
 */
public class CheckDomainAvailabilityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Availability")
    public DomainAvailabilityEnum availability;

    public CheckDomainAvailabilityResponse withAvailability(DomainAvailabilityEnum availability) {
        this.availability = availability;
        return this;
    }
    
    public CheckDomainAvailabilityResponse(){}
}
