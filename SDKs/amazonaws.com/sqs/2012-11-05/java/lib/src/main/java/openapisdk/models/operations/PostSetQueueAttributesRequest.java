package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetQueueAttributesRequest {
    public PostSetQueueAttributesQueryParams queryParams;
    public PostSetQueueAttributesRequest withQueryParams(PostSetQueueAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetQueueAttributesHeaders headers;
    public PostSetQueueAttributesRequest withHeaders(PostSetQueueAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetQueueAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}