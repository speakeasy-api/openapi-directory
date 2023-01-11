package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetGroupRequest {
    public DescribeDatasetGroupHeaders headers;
    public DescribeDatasetGroupRequest withHeaders(DescribeDatasetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDatasetGroupRequest request;
    public DescribeDatasetGroupRequest withRequest(openapisdk.models.shared.DescribeDatasetGroupRequest request) {
        this.request = request;
        return this;
    }
}