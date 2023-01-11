package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTaskDefinitionRequest {
    public DescribeTaskDefinitionHeaders headers;
    public DescribeTaskDefinitionRequest withHeaders(DescribeTaskDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTaskDefinitionRequest request;
    public DescribeTaskDefinitionRequest withRequest(openapisdk.models.shared.DescribeTaskDefinitionRequest request) {
        this.request = request;
        return this;
    }
}