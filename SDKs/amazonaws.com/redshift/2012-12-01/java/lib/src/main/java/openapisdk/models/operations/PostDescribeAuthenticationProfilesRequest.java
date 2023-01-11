package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAuthenticationProfilesRequest {
    public PostDescribeAuthenticationProfilesQueryParams queryParams;
    public PostDescribeAuthenticationProfilesRequest withQueryParams(PostDescribeAuthenticationProfilesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAuthenticationProfilesHeaders headers;
    public PostDescribeAuthenticationProfilesRequest withHeaders(PostDescribeAuthenticationProfilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAuthenticationProfilesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}