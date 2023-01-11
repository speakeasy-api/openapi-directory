package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorTargetRequest {
    public PostDeleteTrafficMirrorTargetQueryParams queryParams;
    public PostDeleteTrafficMirrorTargetRequest withQueryParams(PostDeleteTrafficMirrorTargetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTrafficMirrorTargetHeaders headers;
    public PostDeleteTrafficMirrorTargetRequest withHeaders(PostDeleteTrafficMirrorTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTrafficMirrorTargetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}