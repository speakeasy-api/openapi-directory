package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUploadRequest {
    public GetUploadHeaders headers;
    public GetUploadRequest withHeaders(GetUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUploadRequest request;
    public GetUploadRequest withRequest(openapisdk.models.shared.GetUploadRequest request) {
        this.request = request;
        return this;
    }
}