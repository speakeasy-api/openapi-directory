package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeActivityRequest {
    public DescribeActivityHeaders headers;
    public DescribeActivityRequest withHeaders(DescribeActivityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeActivityInput request;
    public DescribeActivityRequest withRequest(openapisdk.models.shared.DescribeActivityInput request) {
        this.request = request;
        return this;
    }
}