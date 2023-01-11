package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceNetworkAclAssociationRequest {
    public PostReplaceNetworkAclAssociationQueryParams queryParams;
    public PostReplaceNetworkAclAssociationRequest withQueryParams(PostReplaceNetworkAclAssociationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReplaceNetworkAclAssociationHeaders headers;
    public PostReplaceNetworkAclAssociationRequest withHeaders(PostReplaceNetworkAclAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReplaceNetworkAclAssociationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}