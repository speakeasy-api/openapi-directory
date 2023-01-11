package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelBundleTaskRequest {
    public PostCancelBundleTaskQueryParams queryParams;
    public PostCancelBundleTaskRequest withQueryParams(PostCancelBundleTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelBundleTaskHeaders headers;
    public PostCancelBundleTaskRequest withHeaders(PostCancelBundleTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelBundleTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}