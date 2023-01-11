package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopRemoteAccessSessionRequest {
    public StopRemoteAccessSessionHeaders headers;
    public StopRemoteAccessSessionRequest withHeaders(StopRemoteAccessSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopRemoteAccessSessionRequest request;
    public StopRemoteAccessSessionRequest withRequest(openapisdk.models.shared.StopRemoteAccessSessionRequest request) {
        this.request = request;
        return this;
    }
}