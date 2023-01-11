package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServiceActionRequest {
    public DescribeServiceActionHeaders headers;
    public DescribeServiceActionRequest withHeaders(DescribeServiceActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServiceActionInput request;
    public DescribeServiceActionRequest withRequest(openapisdk.models.shared.DescribeServiceActionInput request) {
        this.request = request;
        return this;
    }
}