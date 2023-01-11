package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeVpcPeeringAuthorizationsRequest {
    public DescribeVpcPeeringAuthorizationsHeaders headers;
    public DescribeVpcPeeringAuthorizationsRequest withHeaders(DescribeVpcPeeringAuthorizationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeVpcPeeringAuthorizationsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}