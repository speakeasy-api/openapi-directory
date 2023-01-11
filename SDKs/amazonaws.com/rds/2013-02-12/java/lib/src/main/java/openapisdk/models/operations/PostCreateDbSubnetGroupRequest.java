package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbSubnetGroupRequest {
    public PostCreateDbSubnetGroupQueryParams queryParams;
    public PostCreateDbSubnetGroupRequest withQueryParams(PostCreateDbSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateDbSubnetGroupHeaders headers;
    public PostCreateDbSubnetGroupRequest withHeaders(PostCreateDbSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateDbSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}