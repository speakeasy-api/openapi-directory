package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachInstancesRequest {
    public PostAttachInstancesQueryParams queryParams;
    public PostAttachInstancesRequest withQueryParams(PostAttachInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachInstancesHeaders headers;
    public PostAttachInstancesRequest withHeaders(PostAttachInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAttachInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}