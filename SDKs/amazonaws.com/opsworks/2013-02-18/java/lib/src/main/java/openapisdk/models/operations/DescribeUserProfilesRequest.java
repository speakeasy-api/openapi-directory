package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserProfilesRequest {
    public DescribeUserProfilesHeaders headers;
    public DescribeUserProfilesRequest withHeaders(DescribeUserProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserProfilesRequest request;
    public DescribeUserProfilesRequest withRequest(openapisdk.models.shared.DescribeUserProfilesRequest request) {
        this.request = request;
        return this;
    }
}