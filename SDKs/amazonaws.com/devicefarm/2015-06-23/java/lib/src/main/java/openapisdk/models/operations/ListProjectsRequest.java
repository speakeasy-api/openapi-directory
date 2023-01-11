package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProjectsRequest {
    public ListProjectsQueryParams queryParams;
    public ListProjectsRequest withQueryParams(ListProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListProjectsHeaders headers;
    public ListProjectsRequest withHeaders(ListProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListProjectsRequest request;
    public ListProjectsRequest withRequest(openapisdk.models.shared.ListProjectsRequest request) {
        this.request = request;
        return this;
    }
}