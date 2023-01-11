package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlanRequest {
    public GetPlanHeaders headers;
    public GetPlanRequest withHeaders(GetPlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPlanRequest request;
    public GetPlanRequest withRequest(openapisdk.models.shared.GetPlanRequest request) {
        this.request = request;
        return this;
    }
}