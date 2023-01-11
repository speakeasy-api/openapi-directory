package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDetachInstancesRequest {
    public PostDetachInstancesQueryParams queryParams;
    public PostDetachInstancesRequest withQueryParams(PostDetachInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDetachInstancesHeaders headers;
    public PostDetachInstancesRequest withHeaders(PostDetachInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDetachInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}