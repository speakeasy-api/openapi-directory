package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAttackRequest {
    public DescribeAttackHeaders headers;
    public DescribeAttackRequest withHeaders(DescribeAttackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAttackRequest request;
    public DescribeAttackRequest withRequest(openapisdk.models.shared.DescribeAttackRequest request) {
        this.request = request;
        return this;
    }
}