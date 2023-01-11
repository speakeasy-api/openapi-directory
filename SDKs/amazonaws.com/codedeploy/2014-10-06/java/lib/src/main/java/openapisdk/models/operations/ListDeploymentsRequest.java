package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentsRequest {
    public ListDeploymentsQueryParams queryParams;
    public ListDeploymentsRequest withQueryParams(ListDeploymentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentsHeaders headers;
    public ListDeploymentsRequest withHeaders(ListDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeploymentsInput request;
    public ListDeploymentsRequest withRequest(openapisdk.models.shared.ListDeploymentsInput request) {
        this.request = request;
        return this;
    }
}