package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyFleetRequest {
    public PostModifyFleetQueryParams queryParams;
    public PostModifyFleetRequest withQueryParams(PostModifyFleetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyFleetHeaders headers;
    public PostModifyFleetRequest withHeaders(PostModifyFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyFleetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}