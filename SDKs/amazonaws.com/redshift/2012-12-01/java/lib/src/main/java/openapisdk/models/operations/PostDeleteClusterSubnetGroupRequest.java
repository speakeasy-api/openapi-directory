package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterSubnetGroupRequest {
    public PostDeleteClusterSubnetGroupQueryParams queryParams;
    public PostDeleteClusterSubnetGroupRequest withQueryParams(PostDeleteClusterSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteClusterSubnetGroupHeaders headers;
    public PostDeleteClusterSubnetGroupRequest withHeaders(PostDeleteClusterSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteClusterSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}