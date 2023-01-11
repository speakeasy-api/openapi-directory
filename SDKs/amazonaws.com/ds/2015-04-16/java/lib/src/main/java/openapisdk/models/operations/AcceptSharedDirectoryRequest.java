package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptSharedDirectoryRequest {
    public AcceptSharedDirectoryHeaders headers;
    public AcceptSharedDirectoryRequest withHeaders(AcceptSharedDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptSharedDirectoryRequest request;
    public AcceptSharedDirectoryRequest withRequest(openapisdk.models.shared.AcceptSharedDirectoryRequest request) {
        this.request = request;
        return this;
    }
}