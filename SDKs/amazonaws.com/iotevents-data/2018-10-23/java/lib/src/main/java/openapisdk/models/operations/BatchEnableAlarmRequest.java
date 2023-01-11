package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchEnableAlarmRequest {
    public BatchEnableAlarmHeaders headers;
    public BatchEnableAlarmRequest withHeaders(BatchEnableAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchEnableAlarmRequestBody request;
    public BatchEnableAlarmRequest withRequest(BatchEnableAlarmRequestBody request) {
        this.request = request;
        return this;
    }
}