package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectoryConfigRequest {
    public DeleteDirectoryConfigHeaders headers;
    public DeleteDirectoryConfigRequest withHeaders(DeleteDirectoryConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDirectoryConfigRequest request;
    public DeleteDirectoryConfigRequest withRequest(openapisdk.models.shared.DeleteDirectoryConfigRequest request) {
        this.request = request;
        return this;
    }
}