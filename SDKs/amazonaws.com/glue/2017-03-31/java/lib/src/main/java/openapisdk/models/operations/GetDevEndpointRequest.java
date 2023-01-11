package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevEndpointRequest {
    public GetDevEndpointHeaders headers;
    public GetDevEndpointRequest withHeaders(GetDevEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDevEndpointRequest request;
    public GetDevEndpointRequest withRequest(openapisdk.models.shared.GetDevEndpointRequest request) {
        this.request = request;
        return this;
    }
}