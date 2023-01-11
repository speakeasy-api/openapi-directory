package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorNotifications {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onError")
    public SingleMonitor200ApplicationJsonMonitorNotificationsOnError[] onError;
    public SingleMonitor200ApplicationJsonMonitorNotifications withOnError(SingleMonitor200ApplicationJsonMonitorNotificationsOnError[] onError) {
        this.onError = onError;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onFailure")
    public SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure[] onFailure;
    public SingleMonitor200ApplicationJsonMonitorNotifications withOnFailure(SingleMonitor200ApplicationJsonMonitorNotificationsOnFailure[] onFailure) {
        this.onFailure = onFailure;
        return this;
    }
}