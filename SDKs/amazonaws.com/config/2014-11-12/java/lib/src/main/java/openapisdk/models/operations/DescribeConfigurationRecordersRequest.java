package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConfigurationRecordersRequest {
    public DescribeConfigurationRecordersHeaders headers;
    public DescribeConfigurationRecordersRequest withHeaders(DescribeConfigurationRecordersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConfigurationRecordersRequest request;
    public DescribeConfigurationRecordersRequest withRequest(openapisdk.models.shared.DescribeConfigurationRecordersRequest request) {
        this.request = request;
        return this;
    }
}