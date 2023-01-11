package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorSessionRequest {
    public PostCreateTrafficMirrorSessionQueryParams queryParams;
    public PostCreateTrafficMirrorSessionRequest withQueryParams(PostCreateTrafficMirrorSessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTrafficMirrorSessionHeaders headers;
    public PostCreateTrafficMirrorSessionRequest withHeaders(PostCreateTrafficMirrorSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTrafficMirrorSessionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}