package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTaskStartedEventAttributes
 * Provides the details of the <code>ActivityTaskStarted</code> event.
**/
public class ActivityTaskStartedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public ActivityTaskStartedEventAttributes withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public ActivityTaskStartedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
}