package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchAndRankCarRequest {
    public SearchAndRankCarQueryParams queryParams;
    public SearchAndRankCarRequest withQueryParams(SearchAndRankCarQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CarRankRequest request;
    public SearchAndRankCarRequest withRequest(openapisdk.models.shared.CarRankRequest request) {
        this.request = request;
        return this;
    }
}