package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchThingsRequest {
    public SearchThingsQueryParams queryParams;
    public SearchThingsRequest withQueryParams(SearchThingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchThingsHeaders headers;
    public SearchThingsRequest withHeaders(SearchThingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchThingsRequest request;
    public SearchThingsRequest withRequest(openapisdk.models.shared.SearchThingsRequest request) {
        this.request = request;
        return this;
    }
}