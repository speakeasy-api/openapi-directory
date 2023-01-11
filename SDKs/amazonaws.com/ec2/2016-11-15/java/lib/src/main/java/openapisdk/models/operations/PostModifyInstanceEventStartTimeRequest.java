package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceEventStartTimeRequest {
    public PostModifyInstanceEventStartTimeQueryParams queryParams;
    public PostModifyInstanceEventStartTimeRequest withQueryParams(PostModifyInstanceEventStartTimeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyInstanceEventStartTimeHeaders headers;
    public PostModifyInstanceEventStartTimeRequest withHeaders(PostModifyInstanceEventStartTimeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyInstanceEventStartTimeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}