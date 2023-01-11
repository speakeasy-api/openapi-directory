package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InitiateLayerUploadRequest {
    public InitiateLayerUploadHeaders headers;
    public InitiateLayerUploadRequest withHeaders(InitiateLayerUploadHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InitiateLayerUploadRequest request;
    public InitiateLayerUploadRequest withRequest(openapisdk.models.shared.InitiateLayerUploadRequest request) {
        this.request = request;
        return this;
    }
}