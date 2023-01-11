package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorTargetRequest {
    public PostCreateTrafficMirrorTargetQueryParams queryParams;
    public PostCreateTrafficMirrorTargetRequest withQueryParams(PostCreateTrafficMirrorTargetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTrafficMirrorTargetHeaders headers;
    public PostCreateTrafficMirrorTargetRequest withHeaders(PostCreateTrafficMirrorTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTrafficMirrorTargetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}