package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateSubnetCidrBlockRequest {
    public PostAssociateSubnetCidrBlockQueryParams queryParams;
    public PostAssociateSubnetCidrBlockRequest withQueryParams(PostAssociateSubnetCidrBlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateSubnetCidrBlockHeaders headers;
    public PostAssociateSubnetCidrBlockRequest withHeaders(PostAssociateSubnetCidrBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateSubnetCidrBlockRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}