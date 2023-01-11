package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetRequest {
    public CreateAssetHeaders headers;
    public CreateAssetRequest withHeaders(CreateAssetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAssetRequestBody request;
    public CreateAssetRequest withRequest(CreateAssetRequestBody request) {
        this.request = request;
        return this;
    }
}