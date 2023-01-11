package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInsightImpactGraphRequest {
    public GetInsightImpactGraphHeaders headers;
    public GetInsightImpactGraphRequest withHeaders(GetInsightImpactGraphHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetInsightImpactGraphRequestBody request;
    public GetInsightImpactGraphRequest withRequest(GetInsightImpactGraphRequestBody request) {
        this.request = request;
        return this;
    }
}