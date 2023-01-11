package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAcknowledgeAlarmRequest {
    public BatchAcknowledgeAlarmHeaders headers;
    public BatchAcknowledgeAlarmRequest withHeaders(BatchAcknowledgeAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchAcknowledgeAlarmRequestBody request;
    public BatchAcknowledgeAlarmRequest withRequest(BatchAcknowledgeAlarmRequestBody request) {
        this.request = request;
        return this;
    }
}