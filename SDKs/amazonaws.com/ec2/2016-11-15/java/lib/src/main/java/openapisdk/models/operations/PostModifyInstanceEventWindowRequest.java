package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceEventWindowRequest {
    public PostModifyInstanceEventWindowQueryParams queryParams;
    public PostModifyInstanceEventWindowRequest withQueryParams(PostModifyInstanceEventWindowQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceEventWindowHeaders headers;
    public PostModifyInstanceEventWindowRequest withHeaders(PostModifyInstanceEventWindowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceEventWindowRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}