package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDeploymentGroupsRequest {
    public ListDeploymentGroupsQueryParams queryParams;
    public ListDeploymentGroupsRequest withQueryParams(ListDeploymentGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeploymentGroupsHeaders headers;
    public ListDeploymentGroupsRequest withHeaders(ListDeploymentGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDeploymentGroupsInput request;
    public ListDeploymentGroupsRequest withRequest(openapisdk.models.shared.ListDeploymentGroupsInput request) {
        this.request = request;
        return this;
    }
}