package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUploadRequest {
    public DeleteUploadHeaders headers;
    public DeleteUploadRequest withHeaders(DeleteUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteUploadRequest request;
    public DeleteUploadRequest withRequest(openapisdk.models.shared.DeleteUploadRequest request) {
        this.request = request;
        return this;
    }
}