package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterSubnetGroupRequest {
    public PostCreateClusterSubnetGroupQueryParams queryParams;
    public PostCreateClusterSubnetGroupRequest withQueryParams(PostCreateClusterSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateClusterSubnetGroupHeaders headers;
    public PostCreateClusterSubnetGroupRequest withHeaders(PostCreateClusterSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateClusterSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}