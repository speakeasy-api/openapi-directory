package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPersonalizedRankingRequest {
    public GetPersonalizedRankingHeaders headers;
    public GetPersonalizedRankingRequest withHeaders(GetPersonalizedRankingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetPersonalizedRankingRequestBody request;
    public GetPersonalizedRankingRequest withRequest(GetPersonalizedRankingRequestBody request) {
        this.request = request;
        return this;
    }
}