package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUploadRequest {
    public UpdateUploadHeaders headers;
    public UpdateUploadRequest withHeaders(UpdateUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUploadRequest request;
    public UpdateUploadRequest withRequest(openapisdk.models.shared.UpdateUploadRequest request) {
        this.request = request;
        return this;
    }
}