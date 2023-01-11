package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCacheSubnetGroupRequest {
    public PostModifyCacheSubnetGroupQueryParams queryParams;
    public PostModifyCacheSubnetGroupRequest withQueryParams(PostModifyCacheSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCacheSubnetGroupHeaders headers;
    public PostModifyCacheSubnetGroupRequest withHeaders(PostModifyCacheSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCacheSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}