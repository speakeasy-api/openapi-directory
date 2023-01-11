package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateSubnetCidrBlockRequest {
    public PostDisassociateSubnetCidrBlockQueryParams queryParams;
    public PostDisassociateSubnetCidrBlockRequest withQueryParams(PostDisassociateSubnetCidrBlockQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateSubnetCidrBlockHeaders headers;
    public PostDisassociateSubnetCidrBlockRequest withHeaders(PostDisassociateSubnetCidrBlockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateSubnetCidrBlockRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}