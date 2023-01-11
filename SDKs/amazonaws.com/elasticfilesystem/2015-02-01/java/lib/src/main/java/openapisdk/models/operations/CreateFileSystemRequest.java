package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFileSystemRequest {
    public CreateFileSystemHeaders headers;
    public CreateFileSystemRequest withHeaders(CreateFileSystemHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFileSystemRequestBody request;
    public CreateFileSystemRequest withRequest(CreateFileSystemRequestBody request) {
        this.request = request;
        return this;
    }
}