package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeClientPropertiesRequest {
    public DescribeClientPropertiesHeaders headers;
    public DescribeClientPropertiesRequest withHeaders(DescribeClientPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeClientPropertiesRequest request;
    public DescribeClientPropertiesRequest withRequest(openapisdk.models.shared.DescribeClientPropertiesRequest request) {
        this.request = request;
        return this;
    }
}