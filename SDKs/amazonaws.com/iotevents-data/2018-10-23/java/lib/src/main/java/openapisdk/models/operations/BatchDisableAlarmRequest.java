package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisableAlarmRequest {
    public BatchDisableAlarmHeaders headers;
    public BatchDisableAlarmRequest withHeaders(BatchDisableAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchDisableAlarmRequestBody request;
    public BatchDisableAlarmRequest withRequest(BatchDisableAlarmRequestBody request) {
        this.request = request;
        return this;
    }
}