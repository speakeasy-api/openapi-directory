package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnshareDirectoryRequest {
    public UnshareDirectoryHeaders headers;
    public UnshareDirectoryRequest withHeaders(UnshareDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UnshareDirectoryRequest request;
    public UnshareDirectoryRequest withRequest(openapisdk.models.shared.UnshareDirectoryRequest request) {
        this.request = request;
        return this;
    }
}