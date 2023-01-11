package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorSessionRequest {
    public PostDeleteTrafficMirrorSessionQueryParams queryParams;
    public PostDeleteTrafficMirrorSessionRequest withQueryParams(PostDeleteTrafficMirrorSessionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTrafficMirrorSessionHeaders headers;
    public PostDeleteTrafficMirrorSessionRequest withHeaders(PostDeleteTrafficMirrorSessionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTrafficMirrorSessionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}