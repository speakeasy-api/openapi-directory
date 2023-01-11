package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchDatabasesByLfTagsRequest {
    public SearchDatabasesByLfTagsHeaders headers;
    public SearchDatabasesByLfTagsRequest withHeaders(SearchDatabasesByLfTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchDatabasesByLfTagsRequest request;
    public SearchDatabasesByLfTagsRequest withRequest(openapisdk.models.shared.SearchDatabasesByLfTagsRequest request) {
        this.request = request;
        return this;
    }
}