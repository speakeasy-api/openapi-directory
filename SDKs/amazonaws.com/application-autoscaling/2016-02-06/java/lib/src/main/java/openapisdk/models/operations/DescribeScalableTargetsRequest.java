package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeScalableTargetsRequest {
    public DescribeScalableTargetsQueryParams queryParams;
    public DescribeScalableTargetsRequest withQueryParams(DescribeScalableTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeScalableTargetsHeaders headers;
    public DescribeScalableTargetsRequest withHeaders(DescribeScalableTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeScalableTargetsRequest request;
    public DescribeScalableTargetsRequest withRequest(openapisdk.models.shared.DescribeScalableTargetsRequest request) {
        this.request = request;
        return this;
    }
}