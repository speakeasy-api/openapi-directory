package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeContainerInstancesRequest {
    public DescribeContainerInstancesHeaders headers;
    public DescribeContainerInstancesRequest withHeaders(DescribeContainerInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeContainerInstancesRequest request;
    public DescribeContainerInstancesRequest withRequest(openapisdk.models.shared.DescribeContainerInstancesRequest request) {
        this.request = request;
        return this;
    }
}