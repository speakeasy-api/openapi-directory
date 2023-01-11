package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSecurityGroupRequest {
    public PostDeleteClusterSecurityGroupQueryParams queryParams;
    public PostDeleteClusterSecurityGroupRequest withQueryParams(PostDeleteClusterSecurityGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClusterSecurityGroupHeaders headers;
    public PostDeleteClusterSecurityGroupRequest withHeaders(PostDeleteClusterSecurityGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClusterSecurityGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}