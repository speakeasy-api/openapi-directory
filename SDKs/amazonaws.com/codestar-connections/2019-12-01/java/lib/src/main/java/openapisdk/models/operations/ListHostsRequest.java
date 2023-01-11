package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListHostsRequest {
    public ListHostsQueryParams queryParams;
    public ListHostsRequest withQueryParams(ListHostsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListHostsHeaders headers;
    public ListHostsRequest withHeaders(ListHostsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListHostsInput request;
    public ListHostsRequest withRequest(openapisdk.models.shared.ListHostsInput request) {
        this.request = request;
        return this;
    }
}