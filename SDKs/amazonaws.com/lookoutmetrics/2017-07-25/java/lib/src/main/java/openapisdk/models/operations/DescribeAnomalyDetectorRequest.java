package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAnomalyDetectorRequest {
    public DescribeAnomalyDetectorHeaders headers;
    public DescribeAnomalyDetectorRequest withHeaders(DescribeAnomalyDetectorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAnomalyDetectorRequestBody request;
    public DescribeAnomalyDetectorRequest withRequest(DescribeAnomalyDetectorRequestBody request) {
        this.request = request;
        return this;
    }
}