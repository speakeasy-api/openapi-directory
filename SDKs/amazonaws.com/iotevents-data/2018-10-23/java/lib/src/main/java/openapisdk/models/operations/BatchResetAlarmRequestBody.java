package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchResetAlarmRequestBody {
    @JsonProperty("resetActionRequests")
    public openapisdk.models.shared.ResetAlarmActionRequest[] resetActionRequests;
    public BatchResetAlarmRequestBody withResetActionRequests(openapisdk.models.shared.ResetAlarmActionRequest[] resetActionRequests) {
        this.resetActionRequests = resetActionRequests;
        return this;
    }
}