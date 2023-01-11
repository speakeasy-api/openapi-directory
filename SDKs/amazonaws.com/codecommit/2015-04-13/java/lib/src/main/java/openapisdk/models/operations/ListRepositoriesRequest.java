package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRepositoriesRequest {
    public ListRepositoriesQueryParams queryParams;
    public ListRepositoriesRequest withQueryParams(ListRepositoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRepositoriesHeaders headers;
    public ListRepositoriesRequest withHeaders(ListRepositoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRepositoriesInput request;
    public ListRepositoriesRequest withRequest(openapisdk.models.shared.ListRepositoriesInput request) {
        this.request = request;
        return this;
    }
}