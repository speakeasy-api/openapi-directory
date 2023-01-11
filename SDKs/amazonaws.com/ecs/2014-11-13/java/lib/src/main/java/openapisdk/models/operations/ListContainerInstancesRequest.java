package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListContainerInstancesRequest {
    public ListContainerInstancesQueryParams queryParams;
    public ListContainerInstancesRequest withQueryParams(ListContainerInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListContainerInstancesHeaders headers;
    public ListContainerInstancesRequest withHeaders(ListContainerInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListContainerInstancesRequest request;
    public ListContainerInstancesRequest withRequest(openapisdk.models.shared.ListContainerInstancesRequest request) {
        this.request = request;
        return this;
    }
}