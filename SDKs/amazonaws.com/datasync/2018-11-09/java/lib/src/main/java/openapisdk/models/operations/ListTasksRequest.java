package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTasksRequest {
    public ListTasksQueryParams queryParams;
    public ListTasksRequest withQueryParams(ListTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTasksHeaders headers;
    public ListTasksRequest withHeaders(ListTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTasksRequest request;
    public ListTasksRequest withRequest(openapisdk.models.shared.ListTasksRequest request) {
        this.request = request;
        return this;
    }
}