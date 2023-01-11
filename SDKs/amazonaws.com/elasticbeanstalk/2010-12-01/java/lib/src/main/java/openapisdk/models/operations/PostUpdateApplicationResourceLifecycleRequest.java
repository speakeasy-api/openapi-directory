package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateApplicationResourceLifecycleRequest {
    public PostUpdateApplicationResourceLifecycleQueryParams queryParams;
    public PostUpdateApplicationResourceLifecycleRequest withQueryParams(PostUpdateApplicationResourceLifecycleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateApplicationResourceLifecycleHeaders headers;
    public PostUpdateApplicationResourceLifecycleRequest withHeaders(PostUpdateApplicationResourceLifecycleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateApplicationResourceLifecycleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}