package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityRequest {
    public DescribeIdentityHeaders headers;
    public DescribeIdentityRequest withHeaders(DescribeIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeIdentityInput request;
    public DescribeIdentityRequest withRequest(openapisdk.models.shared.DescribeIdentityInput request) {
        this.request = request;
        return this;
    }
}