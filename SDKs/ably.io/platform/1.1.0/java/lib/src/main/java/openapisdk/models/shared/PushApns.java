package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * PushApns
 * Extends and overrides generic values when delivering via APNs. [See examples](https://www.ably.io/documentation/general/push/publish#payload-structure)
**/
public class PushApns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
@SpeakeasyMetadata("form:name=notification")
    public Notification notification;
    public PushApns withNotification(Notification notification) {
        this.notification = notification;
        return this;
    }
}