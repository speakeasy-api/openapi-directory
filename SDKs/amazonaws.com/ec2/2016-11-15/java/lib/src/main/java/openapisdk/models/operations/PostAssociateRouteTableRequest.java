package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateRouteTableRequest {
    public PostAssociateRouteTableQueryParams queryParams;
    public PostAssociateRouteTableRequest withQueryParams(PostAssociateRouteTableQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateRouteTableHeaders headers;
    public PostAssociateRouteTableRequest withHeaders(PostAssociateRouteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateRouteTableRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}