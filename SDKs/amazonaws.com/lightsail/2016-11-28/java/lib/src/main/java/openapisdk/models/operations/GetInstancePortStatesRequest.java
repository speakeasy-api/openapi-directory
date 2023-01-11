package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInstancePortStatesRequest {
    public GetInstancePortStatesHeaders headers;
    public GetInstancePortStatesRequest withHeaders(GetInstancePortStatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetInstancePortStatesRequest request;
    public GetInstancePortStatesRequest withRequest(openapisdk.models.shared.GetInstancePortStatesRequest request) {
        this.request = request;
        return this;
    }
}