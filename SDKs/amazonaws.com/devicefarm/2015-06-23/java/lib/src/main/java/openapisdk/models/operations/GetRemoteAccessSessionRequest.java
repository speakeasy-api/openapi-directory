package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoteAccessSessionRequest {
    public GetRemoteAccessSessionHeaders headers;
    public GetRemoteAccessSessionRequest withHeaders(GetRemoteAccessSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRemoteAccessSessionRequest request;
    public GetRemoteAccessSessionRequest withRequest(openapisdk.models.shared.GetRemoteAccessSessionRequest request) {
        this.request = request;
        return this;
    }
}