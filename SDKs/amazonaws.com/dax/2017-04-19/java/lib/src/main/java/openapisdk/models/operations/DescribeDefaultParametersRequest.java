package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDefaultParametersRequest {
    public DescribeDefaultParametersHeaders headers;
    public DescribeDefaultParametersRequest withHeaders(DescribeDefaultParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDefaultParametersRequest request;
    public DescribeDefaultParametersRequest withRequest(openapisdk.models.shared.DescribeDefaultParametersRequest request) {
        this.request = request;
        return this;
    }
}