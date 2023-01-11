package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityPoolRequest {
    public DescribeIdentityPoolHeaders headers;
    public DescribeIdentityPoolRequest withHeaders(DescribeIdentityPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeIdentityPoolInput request;
    public DescribeIdentityPoolRequest withRequest(openapisdk.models.shared.DescribeIdentityPoolInput request) {
        this.request = request;
        return this;
    }
}