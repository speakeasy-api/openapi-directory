package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetQueueAttributesRequest {
    public PostGetQueueAttributesQueryParams queryParams;
    public PostGetQueueAttributesRequest withQueryParams(PostGetQueueAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetQueueAttributesHeaders headers;
    public PostGetQueueAttributesRequest withHeaders(PostGetQueueAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetQueueAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}