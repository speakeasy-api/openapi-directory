package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchEnableAlarmRequestBody {
    @JsonProperty("enableActionRequests")
    public openapisdk.models.shared.EnableAlarmActionRequest[] enableActionRequests;
    public BatchEnableAlarmRequestBody withEnableActionRequests(openapisdk.models.shared.EnableAlarmActionRequest[] enableActionRequests) {
        this.enableActionRequests = enableActionRequests;
        return this;
    }
}