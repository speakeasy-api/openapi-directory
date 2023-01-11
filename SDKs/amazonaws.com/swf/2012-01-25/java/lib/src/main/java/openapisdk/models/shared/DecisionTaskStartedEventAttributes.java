package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DecisionTaskStartedEventAttributes
 * Provides the details of the <code>DecisionTaskStarted</code> event.
**/
public class DecisionTaskStartedEventAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public String identity;
    public DecisionTaskStartedEventAttributes withIdentity(String identity) {
        this.identity = identity;
        return this;
    }
    @JsonProperty("scheduledEventId")
    public Long scheduledEventId;
    public DecisionTaskStartedEventAttributes withScheduledEventId(Long scheduledEventId) {
        this.scheduledEventId = scheduledEventId;
        return this;
    }
}