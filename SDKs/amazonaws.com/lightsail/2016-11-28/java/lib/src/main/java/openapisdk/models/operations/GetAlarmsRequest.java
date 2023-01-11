package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAlarmsRequest {
    public GetAlarmsHeaders headers;
    public GetAlarmsRequest withHeaders(GetAlarmsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAlarmsRequest request;
    public GetAlarmsRequest withRequest(openapisdk.models.shared.GetAlarmsRequest request) {
        this.request = request;
        return this;
    }
}