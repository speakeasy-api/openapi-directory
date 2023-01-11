package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserStackAssociationsRequest {
    public DescribeUserStackAssociationsHeaders headers;
    public DescribeUserStackAssociationsRequest withHeaders(DescribeUserStackAssociationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserStackAssociationsRequest request;
    public DescribeUserStackAssociationsRequest withRequest(openapisdk.models.shared.DescribeUserStackAssociationsRequest request) {
        this.request = request;
        return this;
    }
}