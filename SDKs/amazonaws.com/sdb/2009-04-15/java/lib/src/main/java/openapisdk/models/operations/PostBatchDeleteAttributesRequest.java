package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchDeleteAttributesRequest {
    public PostBatchDeleteAttributesQueryParams queryParams;
    public PostBatchDeleteAttributesRequest withQueryParams(PostBatchDeleteAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchDeleteAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}