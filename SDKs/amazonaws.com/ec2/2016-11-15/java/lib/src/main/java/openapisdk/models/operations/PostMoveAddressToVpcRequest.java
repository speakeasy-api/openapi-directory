package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMoveAddressToVpcRequest {
    public PostMoveAddressToVpcQueryParams queryParams;
    public PostMoveAddressToVpcRequest withQueryParams(PostMoveAddressToVpcQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostMoveAddressToVpcHeaders headers;
    public PostMoveAddressToVpcRequest withHeaders(PostMoveAddressToVpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostMoveAddressToVpcRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}