package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchSystemTemplatesRequest {
    public SearchSystemTemplatesQueryParams queryParams;
    public SearchSystemTemplatesRequest withQueryParams(SearchSystemTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchSystemTemplatesHeaders headers;
    public SearchSystemTemplatesRequest withHeaders(SearchSystemTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchSystemTemplatesRequest request;
    public SearchSystemTemplatesRequest withRequest(openapisdk.models.shared.SearchSystemTemplatesRequest request) {
        this.request = request;
        return this;
    }
}