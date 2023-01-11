package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTagsRequest {
    public DescribeTagsHeaders headers;
    public DescribeTagsRequest withHeaders(DescribeTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTagsInput request;
    public DescribeTagsRequest withRequest(openapisdk.models.shared.DescribeTagsInput request) {
        this.request = request;
        return this;
    }
}