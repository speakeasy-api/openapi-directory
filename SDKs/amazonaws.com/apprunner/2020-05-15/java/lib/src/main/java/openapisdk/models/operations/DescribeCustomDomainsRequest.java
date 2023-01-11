package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCustomDomainsRequest {
    public DescribeCustomDomainsQueryParams queryParams;
    public DescribeCustomDomainsRequest withQueryParams(DescribeCustomDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCustomDomainsHeaders headers;
    public DescribeCustomDomainsRequest withHeaders(DescribeCustomDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCustomDomainsRequest request;
    public DescribeCustomDomainsRequest withRequest(openapisdk.models.shared.DescribeCustomDomainsRequest request) {
        this.request = request;
        return this;
    }
}