package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFileRequest {
    public DeleteFileHeaders headers;
    public DeleteFileRequest withHeaders(DeleteFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFileInput request;
    public DeleteFileRequest withRequest(openapisdk.models.shared.DeleteFileInput request) {
        this.request = request;
        return this;
    }
}