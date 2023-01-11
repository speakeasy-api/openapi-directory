package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCodeCoveragesRequest {
    public DescribeCodeCoveragesQueryParams queryParams;
    public DescribeCodeCoveragesRequest withQueryParams(DescribeCodeCoveragesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeCodeCoveragesHeaders headers;
    public DescribeCodeCoveragesRequest withHeaders(DescribeCodeCoveragesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCodeCoveragesInput request;
    public DescribeCodeCoveragesRequest withRequest(openapisdk.models.shared.DescribeCodeCoveragesInput request) {
        this.request = request;
        return this;
    }
}