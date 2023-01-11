package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnExitLifecycle
 * When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
**/
public class OnExitLifecycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Event[] events;
    public OnExitLifecycle withEvents(Event[] events) {
        this.events = events;
        return this;
    }
}