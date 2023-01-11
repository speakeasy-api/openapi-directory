package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeploymentsRequest {
    public DescribeDeploymentsHeaders headers;
    public DescribeDeploymentsRequest withHeaders(DescribeDeploymentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDeploymentsRequest request;
    public DescribeDeploymentsRequest withRequest(openapisdk.models.shared.DescribeDeploymentsRequest request) {
        this.request = request;
        return this;
    }
}