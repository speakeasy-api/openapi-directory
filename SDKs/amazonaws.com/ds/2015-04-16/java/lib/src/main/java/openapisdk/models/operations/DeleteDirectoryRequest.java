package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDirectoryRequest {
    public DeleteDirectoryHeaders headers;
    public DeleteDirectoryRequest withHeaders(DeleteDirectoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDirectoryRequest request;
    public DeleteDirectoryRequest withRequest(openapisdk.models.shared.DeleteDirectoryRequest request) {
        this.request = request;
        return this;
    }
}