package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadLayerPartRequest {
    public UploadLayerPartHeaders headers;
    public UploadLayerPartRequest withHeaders(UploadLayerPartHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UploadLayerPartRequest request;
    public UploadLayerPartRequest withRequest(openapisdk.models.shared.UploadLayerPartRequest request) {
        this.request = request;
        return this;
    }
}