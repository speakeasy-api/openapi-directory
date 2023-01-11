package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAlarmRequest {
    public PutAlarmHeaders headers;
    public PutAlarmRequest withHeaders(PutAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAlarmRequest request;
    public PutAlarmRequest withRequest(openapisdk.models.shared.PutAlarmRequest request) {
        this.request = request;
        return this;
    }
}