package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateInstanceEventWindowRequest {
    public PostAssociateInstanceEventWindowQueryParams queryParams;
    public PostAssociateInstanceEventWindowRequest withQueryParams(PostAssociateInstanceEventWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAssociateInstanceEventWindowHeaders headers;
    public PostAssociateInstanceEventWindowRequest withHeaders(PostAssociateInstanceEventWindowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAssociateInstanceEventWindowRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}