package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectoryRequest {
    public CreateDirectoryHeaders headers;
    public CreateDirectoryRequest withHeaders(CreateDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDirectoryRequest request;
    public CreateDirectoryRequest withRequest(openapisdk.models.shared.CreateDirectoryRequest request) {
        this.request = request;
        return this;
    }
}