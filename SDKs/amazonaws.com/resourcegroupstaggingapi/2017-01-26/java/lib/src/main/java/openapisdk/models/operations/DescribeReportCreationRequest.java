package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReportCreationRequest {
    public DescribeReportCreationHeaders headers;
    public DescribeReportCreationRequest withHeaders(DescribeReportCreationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeReportCreationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}