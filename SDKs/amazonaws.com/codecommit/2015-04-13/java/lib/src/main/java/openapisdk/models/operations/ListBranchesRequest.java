package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBranchesRequest {
    public ListBranchesQueryParams queryParams;
    public ListBranchesRequest withQueryParams(ListBranchesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBranchesHeaders headers;
    public ListBranchesRequest withHeaders(ListBranchesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListBranchesInput request;
    public ListBranchesRequest withRequest(openapisdk.models.shared.ListBranchesInput request) {
        this.request = request;
        return this;
    }
}