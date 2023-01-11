package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEventIntegrationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventIntegrationArn")
    public String eventIntegrationArn;
    public CreateEventIntegrationResponse withEventIntegrationArn(String eventIntegrationArn) {
        this.eventIntegrationArn = eventIntegrationArn;
        return this;
    }
}