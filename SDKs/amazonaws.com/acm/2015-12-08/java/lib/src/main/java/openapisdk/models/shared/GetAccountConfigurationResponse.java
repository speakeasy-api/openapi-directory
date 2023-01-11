package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpiryEvents")
    public ExpiryEventsConfiguration expiryEvents;
    public GetAccountConfigurationResponse withExpiryEvents(ExpiryEventsConfiguration expiryEvents) {
        this.expiryEvents = expiryEvents;
        return this;
    }
}