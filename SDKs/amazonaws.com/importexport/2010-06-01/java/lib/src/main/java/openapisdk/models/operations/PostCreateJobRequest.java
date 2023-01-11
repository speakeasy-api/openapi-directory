package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateJobRequest {
    public PostCreateJobQueryParams queryParams;
    public PostCreateJobRequest withQueryParams(PostCreateJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateJobRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}