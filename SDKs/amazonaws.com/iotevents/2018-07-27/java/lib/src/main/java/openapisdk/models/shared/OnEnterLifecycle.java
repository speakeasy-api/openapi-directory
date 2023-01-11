package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnEnterLifecycle
 * When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
**/
public class OnEnterLifecycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Event[] events;
    public OnEnterLifecycle withEvents(Event[] events) {
        this.events = events;
        return this;
    }
}