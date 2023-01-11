package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetSuppressedDestinationResponse
 * Information about the suppressed email address.
**/
public class GetSuppressedDestinationResponse {
    @JsonProperty("SuppressedDestination")
    public SuppressedDestination suppressedDestination;
    public GetSuppressedDestinationResponse withSuppressedDestination(SuppressedDestination suppressedDestination) {
        this.suppressedDestination = suppressedDestination;
        return this;
    }
}