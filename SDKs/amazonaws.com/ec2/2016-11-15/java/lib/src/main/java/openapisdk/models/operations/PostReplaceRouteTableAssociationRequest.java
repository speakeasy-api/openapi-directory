package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceRouteTableAssociationRequest {
    public PostReplaceRouteTableAssociationQueryParams queryParams;
    public PostReplaceRouteTableAssociationRequest withQueryParams(PostReplaceRouteTableAssociationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReplaceRouteTableAssociationHeaders headers;
    public PostReplaceRouteTableAssociationRequest withHeaders(PostReplaceRouteTableAssociationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReplaceRouteTableAssociationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}