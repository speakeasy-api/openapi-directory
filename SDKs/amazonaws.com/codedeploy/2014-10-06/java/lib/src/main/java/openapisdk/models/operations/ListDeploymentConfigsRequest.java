package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentConfigsRequest {
    public ListDeploymentConfigsQueryParams queryParams;
    public ListDeploymentConfigsRequest withQueryParams(ListDeploymentConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentConfigsHeaders headers;
    public ListDeploymentConfigsRequest withHeaders(ListDeploymentConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeploymentConfigsInput request;
    public ListDeploymentConfigsRequest withRequest(openapisdk.models.shared.ListDeploymentConfigsInput request) {
        this.request = request;
        return this;
    }
}