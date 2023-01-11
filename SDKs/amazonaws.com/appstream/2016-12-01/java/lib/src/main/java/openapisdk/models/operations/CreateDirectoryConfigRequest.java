package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDirectoryConfigRequest {
    public CreateDirectoryConfigHeaders headers;
    public CreateDirectoryConfigRequest withHeaders(CreateDirectoryConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateDirectoryConfigRequest request;
    public CreateDirectoryConfigRequest withRequest(openapisdk.models.shared.CreateDirectoryConfigRequest request) {
        this.request = request;
        return this;
    }
}