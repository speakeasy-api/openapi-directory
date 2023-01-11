package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateRouteTableRequest {
    public PostDisassociateRouteTableQueryParams queryParams;
    public PostDisassociateRouteTableRequest withQueryParams(PostDisassociateRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateRouteTableHeaders headers;
    public PostDisassociateRouteTableRequest withHeaders(PostDisassociateRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}