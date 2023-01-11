package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTrafficMirrorFilterRequest {
    public PostCreateTrafficMirrorFilterQueryParams queryParams;
    public PostCreateTrafficMirrorFilterRequest withQueryParams(PostCreateTrafficMirrorFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTrafficMirrorFilterHeaders headers;
    public PostCreateTrafficMirrorFilterRequest withHeaders(PostCreateTrafficMirrorFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTrafficMirrorFilterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}