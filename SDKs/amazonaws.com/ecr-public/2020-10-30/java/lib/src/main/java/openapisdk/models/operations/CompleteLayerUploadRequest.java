package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteLayerUploadRequest {
    public CompleteLayerUploadHeaders headers;
    public CompleteLayerUploadRequest withHeaders(CompleteLayerUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CompleteLayerUploadRequest request;
    public CompleteLayerUploadRequest withRequest(openapisdk.models.shared.CompleteLayerUploadRequest request) {
        this.request = request;
        return this;
    }
}