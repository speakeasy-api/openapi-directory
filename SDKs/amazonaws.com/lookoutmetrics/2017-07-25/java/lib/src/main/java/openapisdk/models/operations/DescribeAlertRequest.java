package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAlertRequest {
    public DescribeAlertHeaders headers;
    public DescribeAlertRequest withHeaders(DescribeAlertHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAlertRequestBody request;
    public DescribeAlertRequest withRequest(DescribeAlertRequestBody request) {
        this.request = request;
        return this;
    }
}