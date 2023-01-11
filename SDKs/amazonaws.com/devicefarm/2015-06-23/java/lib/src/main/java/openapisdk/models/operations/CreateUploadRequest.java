package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUploadRequest {
    public CreateUploadHeaders headers;
    public CreateUploadRequest withHeaders(CreateUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateUploadRequest request;
    public CreateUploadRequest withRequest(openapisdk.models.shared.CreateUploadRequest request) {
        this.request = request;
        return this;
    }
}