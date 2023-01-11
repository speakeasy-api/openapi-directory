package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetSecurityGroupsRequest {
    public PostSetSecurityGroupsQueryParams queryParams;
    public PostSetSecurityGroupsRequest withQueryParams(PostSetSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetSecurityGroupsHeaders headers;
    public PostSetSecurityGroupsRequest withHeaders(PostSetSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}