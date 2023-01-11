package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchResetAlarmRequest {
    public BatchResetAlarmHeaders headers;
    public BatchResetAlarmRequest withHeaders(BatchResetAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchResetAlarmRequestBody request;
    public BatchResetAlarmRequest withRequest(BatchResetAlarmRequestBody request) {
        this.request = request;
        return this;
    }
}