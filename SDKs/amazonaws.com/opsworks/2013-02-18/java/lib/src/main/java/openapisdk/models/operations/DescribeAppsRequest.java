package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAppsRequest {
    public DescribeAppsHeaders headers;
    public DescribeAppsRequest withHeaders(DescribeAppsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAppsRequest request;
    public DescribeAppsRequest withRequest(openapisdk.models.shared.DescribeAppsRequest request) {
        this.request = request;
        return this;
    }
}