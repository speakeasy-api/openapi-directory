package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteArchiveRequest {
    public DeleteArchiveHeaders headers;
    public DeleteArchiveRequest withHeaders(DeleteArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteArchiveRequest request;
    public DeleteArchiveRequest withRequest(openapisdk.models.shared.DeleteArchiveRequest request) {
        this.request = request;
        return this;
    }
}