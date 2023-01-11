package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.
**/
public class Channel {
    @JsonProperty("eventPublishers")
    public EventPublisherEnum[] eventPublishers;
    public Channel withEventPublishers(EventPublisherEnum[] eventPublishers) {
        this.eventPublishers = eventPublishers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Channel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Channel withUri(String uri) {
        this.uri = uri;
        return this;
    }
}