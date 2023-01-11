package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRecordRequest {
    public DescribeRecordHeaders headers;
    public DescribeRecordRequest withHeaders(DescribeRecordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRecordInput request;
    public DescribeRecordRequest withRequest(openapisdk.models.shared.DescribeRecordInput request) {
        this.request = request;
        return this;
    }
}