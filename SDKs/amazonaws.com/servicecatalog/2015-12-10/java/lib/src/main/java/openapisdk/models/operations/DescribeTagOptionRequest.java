package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTagOptionRequest {
    public DescribeTagOptionHeaders headers;
    public DescribeTagOptionRequest withHeaders(DescribeTagOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTagOptionInput request;
    public DescribeTagOptionRequest withRequest(openapisdk.models.shared.DescribeTagOptionInput request) {
        this.request = request;
        return this;
    }
}