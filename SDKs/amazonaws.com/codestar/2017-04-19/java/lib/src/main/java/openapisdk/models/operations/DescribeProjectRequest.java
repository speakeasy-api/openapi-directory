package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProjectRequest {
    public DescribeProjectHeaders headers;
    public DescribeProjectRequest withHeaders(DescribeProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeProjectRequest request;
    public DescribeProjectRequest withRequest(openapisdk.models.shared.DescribeProjectRequest request) {
        this.request = request;
        return this;
    }
}