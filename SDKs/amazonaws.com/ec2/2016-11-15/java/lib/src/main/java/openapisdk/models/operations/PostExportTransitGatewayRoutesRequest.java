package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExportTransitGatewayRoutesRequest {
    public PostExportTransitGatewayRoutesQueryParams queryParams;
    public PostExportTransitGatewayRoutesRequest withQueryParams(PostExportTransitGatewayRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostExportTransitGatewayRoutesHeaders headers;
    public PostExportTransitGatewayRoutesRequest withHeaders(PostExportTransitGatewayRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostExportTransitGatewayRoutesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}