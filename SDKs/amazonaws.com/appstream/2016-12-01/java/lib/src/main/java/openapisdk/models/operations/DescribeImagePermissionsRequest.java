package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImagePermissionsRequest {
    public DescribeImagePermissionsQueryParams queryParams;
    public DescribeImagePermissionsRequest withQueryParams(DescribeImagePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeImagePermissionsHeaders headers;
    public DescribeImagePermissionsRequest withHeaders(DescribeImagePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeImagePermissionsRequest request;
    public DescribeImagePermissionsRequest withRequest(openapisdk.models.shared.DescribeImagePermissionsRequest request) {
        this.request = request;
        return this;
    }
}