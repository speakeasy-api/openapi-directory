package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeQueryDefinitionsRequest {
    public DescribeQueryDefinitionsHeaders headers;
    public DescribeQueryDefinitionsRequest withHeaders(DescribeQueryDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeQueryDefinitionsRequest request;
    public DescribeQueryDefinitionsRequest withRequest(openapisdk.models.shared.DescribeQueryDefinitionsRequest request) {
        this.request = request;
        return this;
    }
}