package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyEventSubscriptionResponse
 * <p/>
**/
public class ModifyEventSubscriptionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSubscription")
    public EventSubscription eventSubscription;
    public ModifyEventSubscriptionResponse withEventSubscription(EventSubscription eventSubscription) {
        this.eventSubscription = eventSubscription;
        return this;
    }
}