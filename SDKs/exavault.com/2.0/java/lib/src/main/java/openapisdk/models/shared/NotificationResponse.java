package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationResponse
 * Response object for notifications.
**/
public class NotificationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Notification data;
    public NotificationResponse withData(Notification data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("included")
    public Object[] included;
    public NotificationResponse withIncluded(Object[] included) {
        this.included = included;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Long responseStatus;
    public NotificationResponse withResponseStatus(Long responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
}