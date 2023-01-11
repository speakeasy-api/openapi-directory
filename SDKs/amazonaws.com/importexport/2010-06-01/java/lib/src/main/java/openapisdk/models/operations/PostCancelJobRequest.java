package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelJobRequest {
    public PostCancelJobQueryParams queryParams;
    public PostCancelJobRequest withQueryParams(PostCancelJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelJobRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}