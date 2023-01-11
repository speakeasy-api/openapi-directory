package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEvaluationsRequest {
    public DescribeEvaluationsQueryParams queryParams;
    public DescribeEvaluationsRequest withQueryParams(DescribeEvaluationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEvaluationsHeaders headers;
    public DescribeEvaluationsRequest withHeaders(DescribeEvaluationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEvaluationsInput request;
    public DescribeEvaluationsRequest withRequest(openapisdk.models.shared.DescribeEvaluationsInput request) {
        this.request = request;
        return this;
    }
}