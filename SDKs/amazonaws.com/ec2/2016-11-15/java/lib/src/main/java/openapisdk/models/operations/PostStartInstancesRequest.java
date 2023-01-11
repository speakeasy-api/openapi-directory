package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartInstancesRequest {
    public PostStartInstancesQueryParams queryParams;
    public PostStartInstancesRequest withQueryParams(PostStartInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartInstancesHeaders headers;
    public PostStartInstancesRequest withHeaders(PostStartInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}