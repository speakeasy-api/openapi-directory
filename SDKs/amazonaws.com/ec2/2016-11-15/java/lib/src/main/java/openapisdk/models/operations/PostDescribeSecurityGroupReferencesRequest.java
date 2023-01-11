package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSecurityGroupReferencesRequest {
    public PostDescribeSecurityGroupReferencesQueryParams queryParams;
    public PostDescribeSecurityGroupReferencesRequest withQueryParams(PostDescribeSecurityGroupReferencesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSecurityGroupReferencesHeaders headers;
    public PostDescribeSecurityGroupReferencesRequest withHeaders(PostDescribeSecurityGroupReferencesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSecurityGroupReferencesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}