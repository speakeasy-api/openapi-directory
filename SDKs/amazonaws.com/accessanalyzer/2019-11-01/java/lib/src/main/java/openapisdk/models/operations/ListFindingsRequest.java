package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFindingsRequest {
    public ListFindingsQueryParams queryParams;
    public ListFindingsRequest withQueryParams(ListFindingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFindingsHeaders headers;
    public ListFindingsRequest withHeaders(ListFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFindingsRequestBody request;
    public ListFindingsRequest withRequest(ListFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}