package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateStoreImageTaskRequest {
    public PostCreateStoreImageTaskQueryParams queryParams;
    public PostCreateStoreImageTaskRequest withQueryParams(PostCreateStoreImageTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateStoreImageTaskHeaders headers;
    public PostCreateStoreImageTaskRequest withHeaders(PostCreateStoreImageTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateStoreImageTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}