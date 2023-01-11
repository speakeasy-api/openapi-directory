package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSecurityGroupRequest {
    public PostCreateClusterSecurityGroupQueryParams queryParams;
    public PostCreateClusterSecurityGroupRequest withQueryParams(PostCreateClusterSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClusterSecurityGroupHeaders headers;
    public PostCreateClusterSecurityGroupRequest withHeaders(PostCreateClusterSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClusterSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}