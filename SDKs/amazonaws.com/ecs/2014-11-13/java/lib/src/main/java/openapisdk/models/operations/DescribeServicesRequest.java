package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServicesRequest {
    public DescribeServicesHeaders headers;
    public DescribeServicesRequest withHeaders(DescribeServicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServicesRequest request;
    public DescribeServicesRequest withRequest(openapisdk.models.shared.DescribeServicesRequest request) {
        this.request = request;
        return this;
    }
}