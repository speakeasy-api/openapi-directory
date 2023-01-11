package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConstraintRequest {
    public DescribeConstraintHeaders headers;
    public DescribeConstraintRequest withHeaders(DescribeConstraintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConstraintInput request;
    public DescribeConstraintRequest withRequest(openapisdk.models.shared.DescribeConstraintInput request) {
        this.request = request;
        return this;
    }
}