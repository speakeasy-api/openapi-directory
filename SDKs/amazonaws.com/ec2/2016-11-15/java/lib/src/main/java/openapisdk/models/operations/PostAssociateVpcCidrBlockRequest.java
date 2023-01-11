package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateVpcCidrBlockRequest {
    public PostAssociateVpcCidrBlockQueryParams queryParams;
    public PostAssociateVpcCidrBlockRequest withQueryParams(PostAssociateVpcCidrBlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateVpcCidrBlockHeaders headers;
    public PostAssociateVpcCidrBlockRequest withHeaders(PostAssociateVpcCidrBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateVpcCidrBlockRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}