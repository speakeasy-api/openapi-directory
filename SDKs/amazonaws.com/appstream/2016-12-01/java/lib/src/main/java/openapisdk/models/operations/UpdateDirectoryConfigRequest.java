package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDirectoryConfigRequest {
    public UpdateDirectoryConfigHeaders headers;
    public UpdateDirectoryConfigRequest withHeaders(UpdateDirectoryConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateDirectoryConfigRequest request;
    public UpdateDirectoryConfigRequest withRequest(openapisdk.models.shared.UpdateDirectoryConfigRequest request) {
        this.request = request;
        return this;
    }
}