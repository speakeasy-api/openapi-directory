package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamProcessorRequest {
    public DescribeStreamProcessorHeaders headers;
    public DescribeStreamProcessorRequest withHeaders(DescribeStreamProcessorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStreamProcessorRequest request;
    public DescribeStreamProcessorRequest withRequest(openapisdk.models.shared.DescribeStreamProcessorRequest request) {
        this.request = request;
        return this;
    }
}