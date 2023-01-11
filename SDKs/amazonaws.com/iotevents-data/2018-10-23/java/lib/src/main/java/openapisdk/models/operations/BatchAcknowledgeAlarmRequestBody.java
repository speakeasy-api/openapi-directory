package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchAcknowledgeAlarmRequestBody {
    @JsonProperty("acknowledgeActionRequests")
    public openapisdk.models.shared.AcknowledgeAlarmActionRequest[] acknowledgeActionRequests;
    public BatchAcknowledgeAlarmRequestBody withAcknowledgeActionRequests(openapisdk.models.shared.AcknowledgeAlarmActionRequest[] acknowledgeActionRequests) {
        this.acknowledgeActionRequests = acknowledgeActionRequests;
        return this;
    }
}