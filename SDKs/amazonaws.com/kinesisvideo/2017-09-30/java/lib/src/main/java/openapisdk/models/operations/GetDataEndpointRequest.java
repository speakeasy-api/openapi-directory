package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataEndpointRequest {
    public GetDataEndpointHeaders headers;
    public GetDataEndpointRequest withHeaders(GetDataEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetDataEndpointRequestBody request;
    public GetDataEndpointRequest withRequest(GetDataEndpointRequestBody request) {
        this.request = request;
        return this;
    }
}