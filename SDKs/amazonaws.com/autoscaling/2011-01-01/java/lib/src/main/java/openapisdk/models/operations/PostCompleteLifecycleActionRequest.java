package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompleteLifecycleActionRequest {
    public PostCompleteLifecycleActionQueryParams queryParams;
    public PostCompleteLifecycleActionRequest withQueryParams(PostCompleteLifecycleActionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCompleteLifecycleActionHeaders headers;
    public PostCompleteLifecycleActionRequest withHeaders(PostCompleteLifecycleActionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCompleteLifecycleActionRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}