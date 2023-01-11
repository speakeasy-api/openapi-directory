package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchPutAttributesRequest {
    public PostBatchPutAttributesQueryParams queryParams;
    public PostBatchPutAttributesRequest withQueryParams(PostBatchPutAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostBatchPutAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}