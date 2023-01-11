package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRemoteAccessSessionRequest {
    public CreateRemoteAccessSessionHeaders headers;
    public CreateRemoteAccessSessionRequest withHeaders(CreateRemoteAccessSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateRemoteAccessSessionRequest request;
    public CreateRemoteAccessSessionRequest withRequest(openapisdk.models.shared.CreateRemoteAccessSessionRequest request) {
        this.request = request;
        return this;
    }
}