package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImageScanFindingsRequest {
    public DescribeImageScanFindingsQueryParams queryParams;
    public DescribeImageScanFindingsRequest withQueryParams(DescribeImageScanFindingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeImageScanFindingsHeaders headers;
    public DescribeImageScanFindingsRequest withHeaders(DescribeImageScanFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImageScanFindingsRequest request;
    public DescribeImageScanFindingsRequest withRequest(openapisdk.models.shared.DescribeImageScanFindingsRequest request) {
        this.request = request;
        return this;
    }
}