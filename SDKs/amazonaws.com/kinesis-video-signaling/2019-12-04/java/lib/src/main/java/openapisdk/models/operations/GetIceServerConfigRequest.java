package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIceServerConfigRequest {
    public GetIceServerConfigHeaders headers;
    public GetIceServerConfigRequest withHeaders(GetIceServerConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetIceServerConfigRequestBody request;
    public GetIceServerConfigRequest withRequest(GetIceServerConfigRequestBody request) {
        this.request = request;
        return this;
    }
}