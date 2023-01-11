package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisableAlarmRequestBody {
    @JsonProperty("disableActionRequests")
    public openapisdk.models.shared.DisableAlarmActionRequest[] disableActionRequests;
    public BatchDisableAlarmRequestBody withDisableActionRequests(openapisdk.models.shared.DisableAlarmActionRequest[] disableActionRequests) {
        this.disableActionRequests = disableActionRequests;
        return this;
    }
}