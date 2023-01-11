package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSuitesRequest {
    public ListSuitesQueryParams queryParams;
    public ListSuitesRequest withQueryParams(ListSuitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSuitesHeaders headers;
    public ListSuitesRequest withHeaders(ListSuitesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSuitesRequest request;
    public ListSuitesRequest withRequest(openapisdk.models.shared.ListSuitesRequest request) {
        this.request = request;
        return this;
    }
}