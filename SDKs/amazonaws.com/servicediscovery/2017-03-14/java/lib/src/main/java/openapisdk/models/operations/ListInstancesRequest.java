package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListInstancesRequest {
    public ListInstancesQueryParams queryParams;
    public ListInstancesRequest withQueryParams(ListInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListInstancesHeaders headers;
    public ListInstancesRequest withHeaders(ListInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListInstancesRequest request;
    public ListInstancesRequest withRequest(openapisdk.models.shared.ListInstancesRequest request) {
        this.request = request;
        return this;
    }
}