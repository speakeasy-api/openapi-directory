package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRunsRequest {
    public ListRunsQueryParams queryParams;
    public ListRunsRequest withQueryParams(ListRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRunsHeaders headers;
    public ListRunsRequest withHeaders(ListRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRunsRequest request;
    public ListRunsRequest withRequest(openapisdk.models.shared.ListRunsRequest request) {
        this.request = request;
        return this;
    }
}