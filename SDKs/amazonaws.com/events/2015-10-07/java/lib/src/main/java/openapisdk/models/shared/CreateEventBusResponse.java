package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEventBusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusArn")
    public String eventBusArn;
    public CreateEventBusResponse withEventBusArn(String eventBusArn) {
        this.eventBusArn = eventBusArn;
        return this;
    }
}