package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateInstanceEventWindowRequest {
    public PostDisassociateInstanceEventWindowQueryParams queryParams;
    public PostDisassociateInstanceEventWindowRequest withQueryParams(PostDisassociateInstanceEventWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDisassociateInstanceEventWindowHeaders headers;
    public PostDisassociateInstanceEventWindowRequest withHeaders(PostDisassociateInstanceEventWindowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDisassociateInstanceEventWindowRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}