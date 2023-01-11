package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbSubnetGroupRequest {
    public PostDeleteDbSubnetGroupQueryParams queryParams;
    public PostDeleteDbSubnetGroupRequest withQueryParams(PostDeleteDbSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDbSubnetGroupHeaders headers;
    public PostDeleteDbSubnetGroupRequest withHeaders(PostDeleteDbSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDbSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}