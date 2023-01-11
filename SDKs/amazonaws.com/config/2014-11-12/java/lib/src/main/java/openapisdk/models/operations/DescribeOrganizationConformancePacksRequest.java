package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationConformancePacksRequest {
    public DescribeOrganizationConformancePacksQueryParams queryParams;
    public DescribeOrganizationConformancePacksRequest withQueryParams(DescribeOrganizationConformancePacksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeOrganizationConformancePacksHeaders headers;
    public DescribeOrganizationConformancePacksRequest withHeaders(DescribeOrganizationConformancePacksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrganizationConformancePacksRequest request;
    public DescribeOrganizationConformancePacksRequest withRequest(openapisdk.models.shared.DescribeOrganizationConformancePacksRequest request) {
        this.request = request;
        return this;
    }
}