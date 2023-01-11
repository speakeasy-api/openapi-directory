package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRemediationExceptionsRequest {
    public DescribeRemediationExceptionsQueryParams queryParams;
    public DescribeRemediationExceptionsRequest withQueryParams(DescribeRemediationExceptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRemediationExceptionsHeaders headers;
    public DescribeRemediationExceptionsRequest withHeaders(DescribeRemediationExceptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRemediationExceptionsRequest request;
    public DescribeRemediationExceptionsRequest withRequest(openapisdk.models.shared.DescribeRemediationExceptionsRequest request) {
        this.request = request;
        return this;
    }
}