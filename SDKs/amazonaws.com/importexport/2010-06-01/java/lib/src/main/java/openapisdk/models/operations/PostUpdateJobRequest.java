package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateJobRequest {
    public PostUpdateJobQueryParams queryParams;
    public PostUpdateJobRequest withQueryParams(PostUpdateJobQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateJobRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}