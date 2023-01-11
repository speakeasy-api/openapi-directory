package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectSharedDirectoryRequest {
    public RejectSharedDirectoryHeaders headers;
    public RejectSharedDirectoryRequest withHeaders(RejectSharedDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectSharedDirectoryRequest request;
    public RejectSharedDirectoryRequest withRequest(openapisdk.models.shared.RejectSharedDirectoryRequest request) {
        this.request = request;
        return this;
    }
}