package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateVpcCidrBlockRequest {
    public PostDisassociateVpcCidrBlockQueryParams queryParams;
    public PostDisassociateVpcCidrBlockRequest withQueryParams(PostDisassociateVpcCidrBlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateVpcCidrBlockHeaders headers;
    public PostDisassociateVpcCidrBlockRequest withHeaders(PostDisassociateVpcCidrBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateVpcCidrBlockRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}