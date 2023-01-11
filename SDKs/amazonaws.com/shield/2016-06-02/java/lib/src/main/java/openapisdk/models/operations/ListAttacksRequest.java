package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttacksRequest {
    public ListAttacksQueryParams queryParams;
    public ListAttacksRequest withQueryParams(ListAttacksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAttacksHeaders headers;
    public ListAttacksRequest withHeaders(ListAttacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAttacksRequest request;
    public ListAttacksRequest withRequest(openapisdk.models.shared.ListAttacksRequest request) {
        this.request = request;
        return this;
    }
}