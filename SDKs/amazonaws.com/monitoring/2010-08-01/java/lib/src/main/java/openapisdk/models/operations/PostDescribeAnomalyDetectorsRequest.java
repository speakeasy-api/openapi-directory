package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAnomalyDetectorsRequest {
    public PostDescribeAnomalyDetectorsQueryParams queryParams;
    public PostDescribeAnomalyDetectorsRequest withQueryParams(PostDescribeAnomalyDetectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAnomalyDetectorsHeaders headers;
    public PostDescribeAnomalyDetectorsRequest withHeaders(PostDescribeAnomalyDetectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAnomalyDetectorsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}