package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetConfigurationSetEventDestinationsResponse
 * Information about an event destination for a configuration set.
**/
public class GetConfigurationSetEventDestinationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventDestinations")
    public EventDestination[] eventDestinations;
    public GetConfigurationSetEventDestinationsResponse withEventDestinations(EventDestination[] eventDestinations) {
        this.eventDestinations = eventDestinations;
        return this;
    }
}