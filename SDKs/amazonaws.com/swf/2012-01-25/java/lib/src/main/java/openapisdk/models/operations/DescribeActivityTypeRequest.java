package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeActivityTypeRequest {
    public DescribeActivityTypeHeaders headers;
    public DescribeActivityTypeRequest withHeaders(DescribeActivityTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeActivityTypeInput request;
    public DescribeActivityTypeRequest withRequest(openapisdk.models.shared.DescribeActivityTypeInput request) {
        this.request = request;
        return this;
    }
}