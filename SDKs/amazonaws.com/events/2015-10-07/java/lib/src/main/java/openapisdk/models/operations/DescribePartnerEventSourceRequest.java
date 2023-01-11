package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePartnerEventSourceRequest {
    public DescribePartnerEventSourceHeaders headers;
    public DescribePartnerEventSourceRequest withHeaders(DescribePartnerEventSourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribePartnerEventSourceRequest request;
    public DescribePartnerEventSourceRequest withRequest(openapisdk.models.shared.DescribePartnerEventSourceRequest request) {
        this.request = request;
        return this;
    }
}