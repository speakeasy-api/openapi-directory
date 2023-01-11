package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReturnShippingLabelRequest {
    public DescribeReturnShippingLabelHeaders headers;
    public DescribeReturnShippingLabelRequest withHeaders(DescribeReturnShippingLabelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReturnShippingLabelRequest request;
    public DescribeReturnShippingLabelRequest withRequest(openapisdk.models.shared.DescribeReturnShippingLabelRequest request) {
        this.request = request;
        return this;
    }
}