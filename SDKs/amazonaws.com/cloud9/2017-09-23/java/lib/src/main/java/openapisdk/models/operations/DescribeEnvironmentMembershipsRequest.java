package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEnvironmentMembershipsRequest {
    public DescribeEnvironmentMembershipsQueryParams queryParams;
    public DescribeEnvironmentMembershipsRequest withQueryParams(DescribeEnvironmentMembershipsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEnvironmentMembershipsHeaders headers;
    public DescribeEnvironmentMembershipsRequest withHeaders(DescribeEnvironmentMembershipsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEnvironmentMembershipsRequest request;
    public DescribeEnvironmentMembershipsRequest withRequest(openapisdk.models.shared.DescribeEnvironmentMembershipsRequest request) {
        this.request = request;
        return this;
    }
}