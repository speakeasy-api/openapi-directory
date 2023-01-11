package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRegistriesRequest {
    public DescribeRegistriesQueryParams queryParams;
    public DescribeRegistriesRequest withQueryParams(DescribeRegistriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeRegistriesHeaders headers;
    public DescribeRegistriesRequest withHeaders(DescribeRegistriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRegistriesRequest request;
    public DescribeRegistriesRequest withRequest(openapisdk.models.shared.DescribeRegistriesRequest request) {
        this.request = request;
        return this;
    }
}