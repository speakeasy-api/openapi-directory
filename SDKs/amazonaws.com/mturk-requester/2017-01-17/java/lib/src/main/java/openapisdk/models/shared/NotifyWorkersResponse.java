package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NotifyWorkersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyWorkersFailureStatuses")
    public NotifyWorkersFailureStatus[] notifyWorkersFailureStatuses;
    public NotifyWorkersResponse withNotifyWorkersFailureStatuses(NotifyWorkersFailureStatus[] notifyWorkersFailureStatuses) {
        this.notifyWorkersFailureStatuses = notifyWorkersFailureStatuses;
        return this;
    }
}