package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSolutionVersionsRequest {
    public ListSolutionVersionsQueryParams queryParams;
    public ListSolutionVersionsRequest withQueryParams(ListSolutionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSolutionVersionsHeaders headers;
    public ListSolutionVersionsRequest withHeaders(ListSolutionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSolutionVersionsRequest request;
    public ListSolutionVersionsRequest withRequest(openapisdk.models.shared.ListSolutionVersionsRequest request) {
        this.request = request;
        return this;
    }
}