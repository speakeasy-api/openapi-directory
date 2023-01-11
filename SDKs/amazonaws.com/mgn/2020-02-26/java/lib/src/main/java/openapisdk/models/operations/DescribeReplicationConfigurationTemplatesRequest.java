package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplicationConfigurationTemplatesRequest {
    public DescribeReplicationConfigurationTemplatesQueryParams queryParams;
    public DescribeReplicationConfigurationTemplatesRequest withQueryParams(DescribeReplicationConfigurationTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeReplicationConfigurationTemplatesHeaders headers;
    public DescribeReplicationConfigurationTemplatesRequest withHeaders(DescribeReplicationConfigurationTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeReplicationConfigurationTemplatesRequestBody request;
    public DescribeReplicationConfigurationTemplatesRequest withRequest(DescribeReplicationConfigurationTemplatesRequestBody request) {
        this.request = request;
        return this;
    }
}