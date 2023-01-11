package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAddressRequest {
    public DescribeAddressHeaders headers;
    public DescribeAddressRequest withHeaders(DescribeAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAddressRequest request;
    public DescribeAddressRequest withRequest(openapisdk.models.shared.DescribeAddressRequest request) {
        this.request = request;
        return this;
    }
}