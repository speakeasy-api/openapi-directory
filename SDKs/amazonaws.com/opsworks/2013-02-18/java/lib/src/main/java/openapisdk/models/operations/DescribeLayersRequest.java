package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLayersRequest {
    public DescribeLayersHeaders headers;
    public DescribeLayersRequest withHeaders(DescribeLayersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLayersRequest request;
    public DescribeLayersRequest withRequest(openapisdk.models.shared.DescribeLayersRequest request) {
        this.request = request;
        return this;
    }
}