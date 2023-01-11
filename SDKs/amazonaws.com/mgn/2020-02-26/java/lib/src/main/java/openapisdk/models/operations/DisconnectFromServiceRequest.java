package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisconnectFromServiceRequest {
    public DisconnectFromServiceHeaders headers;
    public DisconnectFromServiceRequest withHeaders(DisconnectFromServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisconnectFromServiceRequestBody request;
    public DisconnectFromServiceRequest withRequest(DisconnectFromServiceRequestBody request) {
        this.request = request;
        return this;
    }
}