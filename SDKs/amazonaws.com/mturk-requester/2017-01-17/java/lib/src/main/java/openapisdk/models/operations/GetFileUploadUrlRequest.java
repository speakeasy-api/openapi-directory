package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileUploadUrlRequest {
    public GetFileUploadUrlHeaders headers;
    public GetFileUploadUrlRequest withHeaders(GetFileUploadUrlHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFileUploadUrlRequest request;
    public GetFileUploadUrlRequest withRequest(openapisdk.models.shared.GetFileUploadUrlRequest request) {
        this.request = request;
        return this;
    }
}