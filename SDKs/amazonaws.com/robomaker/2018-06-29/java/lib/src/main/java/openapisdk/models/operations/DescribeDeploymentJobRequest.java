package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDeploymentJobRequest {
    public DescribeDeploymentJobHeaders headers;
    public DescribeDeploymentJobRequest withHeaders(DescribeDeploymentJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeDeploymentJobRequestBody request;
    public DescribeDeploymentJobRequest withRequest(DescribeDeploymentJobRequestBody request) {
        this.request = request;
        return this;
    }
}