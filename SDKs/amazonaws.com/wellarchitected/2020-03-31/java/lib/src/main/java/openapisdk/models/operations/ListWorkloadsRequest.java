package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkloadsRequest {
    public ListWorkloadsQueryParams queryParams;
    public ListWorkloadsRequest withQueryParams(ListWorkloadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListWorkloadsHeaders headers;
    public ListWorkloadsRequest withHeaders(ListWorkloadsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListWorkloadsRequestBody request;
    public ListWorkloadsRequest withRequest(ListWorkloadsRequestBody request) {
        this.request = request;
        return this;
    }
}