package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentJobsRequest {
    public ListDeploymentJobsQueryParams queryParams;
    public ListDeploymentJobsRequest withQueryParams(ListDeploymentJobsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentJobsHeaders headers;
    public ListDeploymentJobsRequest withHeaders(ListDeploymentJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListDeploymentJobsRequestBody request;
    public ListDeploymentJobsRequest withRequest(ListDeploymentJobsRequestBody request) {
        this.request = request;
        return this;
    }
}