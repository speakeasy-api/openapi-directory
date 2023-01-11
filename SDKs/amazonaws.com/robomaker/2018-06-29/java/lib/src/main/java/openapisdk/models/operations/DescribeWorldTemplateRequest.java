package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorldTemplateRequest {
    public DescribeWorldTemplateHeaders headers;
    public DescribeWorldTemplateRequest withHeaders(DescribeWorldTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeWorldTemplateRequestBody request;
    public DescribeWorldTemplateRequest withRequest(DescribeWorldTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}