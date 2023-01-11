package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserPoolDomainRequest {
    public DescribeUserPoolDomainHeaders headers;
    public DescribeUserPoolDomainRequest withHeaders(DescribeUserPoolDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserPoolDomainRequest request;
    public DescribeUserPoolDomainRequest withRequest(openapisdk.models.shared.DescribeUserPoolDomainRequest request) {
        this.request = request;
        return this;
    }
}