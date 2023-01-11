package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamConsumerRequest {
    public DescribeStreamConsumerHeaders headers;
    public DescribeStreamConsumerRequest withHeaders(DescribeStreamConsumerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStreamConsumerInput request;
    public DescribeStreamConsumerRequest withRequest(openapisdk.models.shared.DescribeStreamConsumerInput request) {
        this.request = request;
        return this;
    }
}