package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHiTsRequest {
    public ListHiTsQueryParams queryParams;
    public ListHiTsRequest withQueryParams(ListHiTsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHiTsHeaders headers;
    public ListHiTsRequest withHeaders(ListHiTsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListHiTsRequest request;
    public ListHiTsRequest withRequest(openapisdk.models.shared.ListHiTsRequest request) {
        this.request = request;
        return this;
    }
}