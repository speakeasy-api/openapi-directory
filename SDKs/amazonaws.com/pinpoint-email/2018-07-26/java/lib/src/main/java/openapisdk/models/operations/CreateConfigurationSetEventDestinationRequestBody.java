package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateConfigurationSetEventDestinationRequestBody {
    @JsonProperty("EventDestination")
    public CreateConfigurationSetEventDestinationRequestBodyEventDestination eventDestination;
    public CreateConfigurationSetEventDestinationRequestBody withEventDestination(CreateConfigurationSetEventDestinationRequestBodyEventDestination eventDestination) {
        this.eventDestination = eventDestination;
        return this;
    }
    @JsonProperty("EventDestinationName")
    public String eventDestinationName;
    public CreateConfigurationSetEventDestinationRequestBody withEventDestinationName(String eventDestinationName) {
        this.eventDestinationName = eventDestinationName;
        return this;
    }
}