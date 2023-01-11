package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentInstancesRequest {
    public ListDeploymentInstancesQueryParams queryParams;
    public ListDeploymentInstancesRequest withQueryParams(ListDeploymentInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentInstancesHeaders headers;
    public ListDeploymentInstancesRequest withHeaders(ListDeploymentInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeploymentInstancesInput request;
    public ListDeploymentInstancesRequest withRequest(openapisdk.models.shared.ListDeploymentInstancesInput request) {
        this.request = request;
        return this;
    }
}