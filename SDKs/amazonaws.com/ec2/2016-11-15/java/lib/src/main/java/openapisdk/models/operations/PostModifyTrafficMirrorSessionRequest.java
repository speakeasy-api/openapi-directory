package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyTrafficMirrorSessionRequest {
    public PostModifyTrafficMirrorSessionQueryParams queryParams;
    public PostModifyTrafficMirrorSessionRequest withQueryParams(PostModifyTrafficMirrorSessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyTrafficMirrorSessionHeaders headers;
    public PostModifyTrafficMirrorSessionRequest withHeaders(PostModifyTrafficMirrorSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyTrafficMirrorSessionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}