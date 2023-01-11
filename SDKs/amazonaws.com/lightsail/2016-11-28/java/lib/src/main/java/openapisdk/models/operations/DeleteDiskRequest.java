package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDiskRequest {
    public DeleteDiskHeaders headers;
    public DeleteDiskRequest withHeaders(DeleteDiskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteDiskRequest request;
    public DeleteDiskRequest withRequest(openapisdk.models.shared.DeleteDiskRequest request) {
        this.request = request;
        return this;
    }
}