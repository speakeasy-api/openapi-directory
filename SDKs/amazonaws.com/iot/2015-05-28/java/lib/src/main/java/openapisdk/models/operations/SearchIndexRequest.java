package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchIndexRequest {
    public SearchIndexHeaders headers;
    public SearchIndexRequest withHeaders(SearchIndexHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SearchIndexRequestBody request;
    public SearchIndexRequest withRequest(SearchIndexRequestBody request) {
        this.request = request;
        return this;
    }
}