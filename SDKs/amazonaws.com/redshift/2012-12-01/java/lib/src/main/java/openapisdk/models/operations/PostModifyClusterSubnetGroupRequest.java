package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSubnetGroupRequest {
    public PostModifyClusterSubnetGroupQueryParams queryParams;
    public PostModifyClusterSubnetGroupRequest withQueryParams(PostModifyClusterSubnetGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterSubnetGroupHeaders headers;
    public PostModifyClusterSubnetGroupRequest withHeaders(PostModifyClusterSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterSubnetGroupRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}