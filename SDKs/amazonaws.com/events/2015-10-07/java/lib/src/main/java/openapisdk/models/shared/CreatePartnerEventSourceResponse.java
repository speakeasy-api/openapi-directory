package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePartnerEventSourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSourceArn")
    public String eventSourceArn;
    public CreatePartnerEventSourceResponse withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
}