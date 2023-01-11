package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUploadStatusRequest {
    public GetUploadStatusHeaders headers;
    public GetUploadStatusRequest withHeaders(GetUploadStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUploadStatusRequest request;
    public GetUploadStatusRequest withRequest(openapisdk.models.shared.GetUploadStatusRequest request) {
        this.request = request;
        return this;
    }
}