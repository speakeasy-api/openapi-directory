package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateEventSubscriptionResponse
 * <p/>
**/
public class CreateEventSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSubscription")
    public EventSubscription eventSubscription;
    public CreateEventSubscriptionResponse withEventSubscription(EventSubscription eventSubscription) {
        this.eventSubscription = eventSubscription;
        return this;
    }
}