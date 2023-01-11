package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrganizationConformancePackStatusesRequest {
    public DescribeOrganizationConformancePackStatusesQueryParams queryParams;
    public DescribeOrganizationConformancePackStatusesRequest withQueryParams(DescribeOrganizationConformancePackStatusesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeOrganizationConformancePackStatusesHeaders headers;
    public DescribeOrganizationConformancePackStatusesRequest withHeaders(DescribeOrganizationConformancePackStatusesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeOrganizationConformancePackStatusesRequest request;
    public DescribeOrganizationConformancePackStatusesRequest withRequest(openapisdk.models.shared.DescribeOrganizationConformancePackStatusesRequest request) {
        this.request = request;
        return this;
    }
}