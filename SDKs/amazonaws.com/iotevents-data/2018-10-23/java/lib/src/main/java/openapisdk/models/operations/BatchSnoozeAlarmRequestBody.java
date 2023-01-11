package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchSnoozeAlarmRequestBody {
    @JsonProperty("snoozeActionRequests")
    public openapisdk.models.shared.SnoozeAlarmActionRequest[] snoozeActionRequests;
    public BatchSnoozeAlarmRequestBody withSnoozeActionRequests(openapisdk.models.shared.SnoozeAlarmActionRequest[] snoozeActionRequests) {
        this.snoozeActionRequests = snoozeActionRequests;
        return this;
    }
}