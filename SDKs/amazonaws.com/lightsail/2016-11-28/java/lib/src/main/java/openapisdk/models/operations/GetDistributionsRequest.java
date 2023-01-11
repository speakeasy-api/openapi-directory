package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionsRequest {
    public GetDistributionsHeaders headers;
    public GetDistributionsRequest withHeaders(GetDistributionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDistributionsRequest request;
    public GetDistributionsRequest withRequest(openapisdk.models.shared.GetDistributionsRequest request) {
        this.request = request;
        return this;
    }
}