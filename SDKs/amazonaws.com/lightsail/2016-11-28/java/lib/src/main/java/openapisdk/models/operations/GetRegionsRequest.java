package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegionsRequest {
    public GetRegionsHeaders headers;
    public GetRegionsRequest withHeaders(GetRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRegionsRequest request;
    public GetRegionsRequest withRequest(openapisdk.models.shared.GetRegionsRequest request) {
        this.request = request;
        return this;
    }
}