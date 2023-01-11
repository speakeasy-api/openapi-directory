package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTaskSetsRequest {
    public DescribeTaskSetsHeaders headers;
    public DescribeTaskSetsRequest withHeaders(DescribeTaskSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTaskSetsRequest request;
    public DescribeTaskSetsRequest withRequest(openapisdk.models.shared.DescribeTaskSetsRequest request) {
        this.request = request;
        return this;
    }
}