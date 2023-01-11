package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteEventSubscriptionResponse
 * <p/>
**/
public class DeleteEventSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSubscription")
    public EventSubscription eventSubscription;
    public DeleteEventSubscriptionResponse withEventSubscription(EventSubscription eventSubscription) {
        this.eventSubscription = eventSubscription;
        return this;
    }
}