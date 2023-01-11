package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateConfigurationSetEventDestinationRequestBody {
    @JsonProperty("EventDestination")
    public UpdateConfigurationSetEventDestinationRequestBodyEventDestination eventDestination;
    public UpdateConfigurationSetEventDestinationRequestBody withEventDestination(UpdateConfigurationSetEventDestinationRequestBodyEventDestination eventDestination) {
        this.eventDestination = eventDestination;
        return this;
    }
}