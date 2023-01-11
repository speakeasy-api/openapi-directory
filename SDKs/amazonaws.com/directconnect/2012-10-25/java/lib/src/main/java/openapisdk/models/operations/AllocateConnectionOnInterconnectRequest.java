package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocateConnectionOnInterconnectRequest {
    public AllocateConnectionOnInterconnectHeaders headers;
    public AllocateConnectionOnInterconnectRequest withHeaders(AllocateConnectionOnInterconnectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocateConnectionOnInterconnectRequest request;
    public AllocateConnectionOnInterconnectRequest withRequest(openapisdk.models.shared.AllocateConnectionOnInterconnectRequest request) {
        this.request = request;
        return this;
    }
}