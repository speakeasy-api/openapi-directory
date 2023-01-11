package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAddressesRequest {
    public DescribeAddressesQueryParams queryParams;
    public DescribeAddressesRequest withQueryParams(DescribeAddressesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAddressesHeaders headers;
    public DescribeAddressesRequest withHeaders(DescribeAddressesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAddressesRequest request;
    public DescribeAddressesRequest withRequest(openapisdk.models.shared.DescribeAddressesRequest request) {
        this.request = request;
        return this;
    }
}