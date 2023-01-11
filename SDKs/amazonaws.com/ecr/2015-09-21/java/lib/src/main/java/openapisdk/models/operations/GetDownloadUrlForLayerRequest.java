package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDownloadUrlForLayerRequest {
    public GetDownloadUrlForLayerHeaders headers;
    public GetDownloadUrlForLayerRequest withHeaders(GetDownloadUrlForLayerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDownloadUrlForLayerRequest request;
    public GetDownloadUrlForLayerRequest withRequest(openapisdk.models.shared.GetDownloadUrlForLayerRequest request) {
        this.request = request;
        return this;
    }
}