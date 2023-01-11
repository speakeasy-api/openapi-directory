package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectoryRequest {
    public CreateDirectoryHeaders headers;
    public CreateDirectoryRequest withHeaders(CreateDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDirectoryRequestBody request;
    public CreateDirectoryRequest withRequest(CreateDirectoryRequestBody request) {
        this.request = request;
        return this;
    }
}