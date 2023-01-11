package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAnomalyDetectionExecutionsRequest {
    public DescribeAnomalyDetectionExecutionsQueryParams queryParams;
    public DescribeAnomalyDetectionExecutionsRequest withQueryParams(DescribeAnomalyDetectionExecutionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeAnomalyDetectionExecutionsHeaders headers;
    public DescribeAnomalyDetectionExecutionsRequest withHeaders(DescribeAnomalyDetectionExecutionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeAnomalyDetectionExecutionsRequestBody request;
    public DescribeAnomalyDetectionExecutionsRequest withRequest(DescribeAnomalyDetectionExecutionsRequestBody request) {
        this.request = request;
        return this;
    }
}