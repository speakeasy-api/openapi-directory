package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundleInstanceRequest {
    public PostBundleInstanceQueryParams queryParams;
    public PostBundleInstanceRequest withQueryParams(PostBundleInstanceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostBundleInstanceHeaders headers;
    public PostBundleInstanceRequest withHeaders(PostBundleInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBundleInstanceRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}