package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSourceServersRequest {
    public DescribeSourceServersQueryParams queryParams;
    public DescribeSourceServersRequest withQueryParams(DescribeSourceServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeSourceServersHeaders headers;
    public DescribeSourceServersRequest withHeaders(DescribeSourceServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeSourceServersRequestBody request;
    public DescribeSourceServersRequest withRequest(DescribeSourceServersRequestBody request) {
        this.request = request;
        return this;
    }
}