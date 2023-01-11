package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigRequest {
    public GetConfigHeaders headers;
    public GetConfigRequest withHeaders(GetConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConfigRequest request;
    public GetConfigRequest withRequest(openapisdk.models.shared.GetConfigRequest request) {
        this.request = request;
        return this;
    }
}