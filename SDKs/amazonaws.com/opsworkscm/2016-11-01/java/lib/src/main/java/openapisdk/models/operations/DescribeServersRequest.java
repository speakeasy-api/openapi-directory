package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServersRequest {
    public DescribeServersQueryParams queryParams;
    public DescribeServersRequest withQueryParams(DescribeServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeServersHeaders headers;
    public DescribeServersRequest withHeaders(DescribeServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServersRequest request;
    public DescribeServersRequest withRequest(openapisdk.models.shared.DescribeServersRequest request) {
        this.request = request;
        return this;
    }
}