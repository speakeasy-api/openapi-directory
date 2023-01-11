package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClusterRequest {
    public DescribeClusterHeaders headers;
    public DescribeClusterRequest withHeaders(DescribeClusterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeClusterRequest request;
    public DescribeClusterRequest withRequest(openapisdk.models.shared.DescribeClusterRequest request) {
        this.request = request;
        return this;
    }
}