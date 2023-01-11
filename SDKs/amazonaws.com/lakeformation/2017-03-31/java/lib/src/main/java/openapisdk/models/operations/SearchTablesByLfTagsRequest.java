package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchTablesByLfTagsRequest {
    public SearchTablesByLfTagsHeaders headers;
    public SearchTablesByLfTagsRequest withHeaders(SearchTablesByLfTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchTablesByLfTagsRequest request;
    public SearchTablesByLfTagsRequest withRequest(openapisdk.models.shared.SearchTablesByLfTagsRequest request) {
        this.request = request;
        return this;
    }
}