package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImagesRequest {
    public DescribeImagesQueryParams queryParams;
    public DescribeImagesRequest withQueryParams(DescribeImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeImagesHeaders headers;
    public DescribeImagesRequest withHeaders(DescribeImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImagesRequest request;
    public DescribeImagesRequest withRequest(openapisdk.models.shared.DescribeImagesRequest request) {
        this.request = request;
        return this;
    }
}