package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSharedProjectsRequest {
    public ListSharedProjectsQueryParams queryParams;
    public ListSharedProjectsRequest withQueryParams(ListSharedProjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSharedProjectsHeaders headers;
    public ListSharedProjectsRequest withHeaders(ListSharedProjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSharedProjectsInput request;
    public ListSharedProjectsRequest withRequest(openapisdk.models.shared.ListSharedProjectsInput request) {
        this.request = request;
        return this;
    }
}