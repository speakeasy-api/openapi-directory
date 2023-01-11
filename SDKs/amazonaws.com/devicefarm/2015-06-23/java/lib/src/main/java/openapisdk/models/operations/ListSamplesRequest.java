package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSamplesRequest {
    public ListSamplesQueryParams queryParams;
    public ListSamplesRequest withQueryParams(ListSamplesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSamplesHeaders headers;
    public ListSamplesRequest withHeaders(ListSamplesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSamplesRequest request;
    public ListSamplesRequest withRequest(openapisdk.models.shared.ListSamplesRequest request) {
        this.request = request;
        return this;
    }
}