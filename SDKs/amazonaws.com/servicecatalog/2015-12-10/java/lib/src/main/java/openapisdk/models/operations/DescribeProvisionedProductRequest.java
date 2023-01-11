package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisionedProductRequest {
    public DescribeProvisionedProductHeaders headers;
    public DescribeProvisionedProductRequest withHeaders(DescribeProvisionedProductHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProvisionedProductInput request;
    public DescribeProvisionedProductRequest withRequest(openapisdk.models.shared.DescribeProvisionedProductInput request) {
        this.request = request;
        return this;
    }
}