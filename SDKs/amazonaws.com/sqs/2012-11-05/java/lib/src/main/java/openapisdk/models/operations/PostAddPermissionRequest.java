package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddPermissionRequest {
    public PostAddPermissionQueryParams queryParams;
    public PostAddPermissionRequest withQueryParams(PostAddPermissionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddPermissionHeaders headers;
    public PostAddPermissionRequest withHeaders(PostAddPermissionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddPermissionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}