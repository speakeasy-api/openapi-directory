package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssetModelRequest {
    public CreateAssetModelHeaders headers;
    public CreateAssetModelRequest withHeaders(CreateAssetModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAssetModelRequestBody request;
    public CreateAssetModelRequest withRequest(CreateAssetModelRequestBody request) {
        this.request = request;
        return this;
    }
}