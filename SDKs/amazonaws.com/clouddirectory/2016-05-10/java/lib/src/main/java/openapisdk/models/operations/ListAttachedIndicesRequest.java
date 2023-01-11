package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttachedIndicesRequest {
    public ListAttachedIndicesQueryParams queryParams;
    public ListAttachedIndicesRequest withQueryParams(ListAttachedIndicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAttachedIndicesHeaders headers;
    public ListAttachedIndicesRequest withHeaders(ListAttachedIndicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAttachedIndicesRequestBody request;
    public ListAttachedIndicesRequest withRequest(ListAttachedIndicesRequestBody request) {
        this.request = request;
        return this;
    }
}