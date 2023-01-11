package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationProperty
 * Specifies configuration properties of a notification.
**/
public class NotificationProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyDelayAfter")
    public Long notifyDelayAfter;
    public NotificationProperty withNotifyDelayAfter(Long notifyDelayAfter) {
        this.notifyDelayAfter = notifyDelayAfter;
        return this;
    }
}