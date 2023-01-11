package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHomeRegionControlsRequest {
    public DescribeHomeRegionControlsQueryParams queryParams;
    public DescribeHomeRegionControlsRequest withQueryParams(DescribeHomeRegionControlsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeHomeRegionControlsHeaders headers;
    public DescribeHomeRegionControlsRequest withHeaders(DescribeHomeRegionControlsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeHomeRegionControlsRequest request;
    public DescribeHomeRegionControlsRequest withRequest(openapisdk.models.shared.DescribeHomeRegionControlsRequest request) {
        this.request = request;
        return this;
    }
}