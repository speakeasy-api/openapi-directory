package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRemoteAccessSessionRequest {
    public DeleteRemoteAccessSessionHeaders headers;
    public DeleteRemoteAccessSessionRequest withHeaders(DeleteRemoteAccessSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRemoteAccessSessionRequest request;
    public DeleteRemoteAccessSessionRequest withRequest(openapisdk.models.shared.DeleteRemoteAccessSessionRequest request) {
        this.request = request;
        return this;
    }
}