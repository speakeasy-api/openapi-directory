package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchLocalGatewayRoutesRequest {
    public PostSearchLocalGatewayRoutesQueryParams queryParams;
    public PostSearchLocalGatewayRoutesRequest withQueryParams(PostSearchLocalGatewayRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSearchLocalGatewayRoutesHeaders headers;
    public PostSearchLocalGatewayRoutesRequest withHeaders(PostSearchLocalGatewayRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSearchLocalGatewayRoutesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}