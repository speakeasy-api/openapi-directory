package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserProfileRequest {
    public DescribeUserProfileHeaders headers;
    public DescribeUserProfileRequest withHeaders(DescribeUserProfileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserProfileRequest request;
    public DescribeUserProfileRequest withRequest(openapisdk.models.shared.DescribeUserProfileRequest request) {
        this.request = request;
        return this;
    }
}