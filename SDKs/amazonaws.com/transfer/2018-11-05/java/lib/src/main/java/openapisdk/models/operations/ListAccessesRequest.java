package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccessesRequest {
    public ListAccessesQueryParams queryParams;
    public ListAccessesRequest withQueryParams(ListAccessesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAccessesHeaders headers;
    public ListAccessesRequest withHeaders(ListAccessesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAccessesRequest request;
    public ListAccessesRequest withRequest(openapisdk.models.shared.ListAccessesRequest request) {
        this.request = request;
        return this;
    }
}