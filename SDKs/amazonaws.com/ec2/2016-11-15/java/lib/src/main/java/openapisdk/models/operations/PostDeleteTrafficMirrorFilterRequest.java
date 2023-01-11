package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTrafficMirrorFilterRequest {
    public PostDeleteTrafficMirrorFilterQueryParams queryParams;
    public PostDeleteTrafficMirrorFilterRequest withQueryParams(PostDeleteTrafficMirrorFilterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTrafficMirrorFilterHeaders headers;
    public PostDeleteTrafficMirrorFilterRequest withHeaders(PostDeleteTrafficMirrorFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTrafficMirrorFilterRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}