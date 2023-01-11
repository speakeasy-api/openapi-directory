package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutLifecycleHookRequest {
    public PostPutLifecycleHookQueryParams queryParams;
    public PostPutLifecycleHookRequest withQueryParams(PostPutLifecycleHookQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutLifecycleHookHeaders headers;
    public PostPutLifecycleHookRequest withHeaders(PostPutLifecycleHookHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutLifecycleHookRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}