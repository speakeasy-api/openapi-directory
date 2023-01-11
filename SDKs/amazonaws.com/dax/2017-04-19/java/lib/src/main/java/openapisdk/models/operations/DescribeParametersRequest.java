package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeParametersRequest {
    public DescribeParametersHeaders headers;
    public DescribeParametersRequest withHeaders(DescribeParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeParametersRequest request;
    public DescribeParametersRequest withRequest(openapisdk.models.shared.DescribeParametersRequest request) {
        this.request = request;
        return this;
    }
}