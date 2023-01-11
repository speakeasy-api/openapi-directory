package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RankCarRequest {
    public RankCarQueryParams queryParams;
    public RankCarRequest withQueryParams(RankCarQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CarRankRequest request;
    public RankCarRequest withRequest(openapisdk.models.shared.CarRankRequest request) {
        this.request = request;
        return this;
    }
}