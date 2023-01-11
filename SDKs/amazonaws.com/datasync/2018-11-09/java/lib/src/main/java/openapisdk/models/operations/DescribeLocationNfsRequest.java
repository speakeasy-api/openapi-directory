package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLocationNfsRequest {
    public DescribeLocationNfsHeaders headers;
    public DescribeLocationNfsRequest withHeaders(DescribeLocationNfsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLocationNfsRequest request;
    public DescribeLocationNfsRequest withRequest(openapisdk.models.shared.DescribeLocationNfsRequest request) {
        this.request = request;
        return this;
    }
}