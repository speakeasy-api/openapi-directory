package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFleetMetadataRequest {
    public DescribeFleetMetadataHeaders headers;
    public DescribeFleetMetadataRequest withHeaders(DescribeFleetMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeFleetMetadataRequestBody request;
    public DescribeFleetMetadataRequest withRequest(DescribeFleetMetadataRequestBody request) {
        this.request = request;
        return this;
    }
}