package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectChildrenRequest {
    public ListObjectChildrenQueryParams queryParams;
    public ListObjectChildrenRequest withQueryParams(ListObjectChildrenQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListObjectChildrenHeaders headers;
    public ListObjectChildrenRequest withHeaders(ListObjectChildrenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListObjectChildrenRequestBody request;
    public ListObjectChildrenRequest withRequest(ListObjectChildrenRequestBody request) {
        this.request = request;
        return this;
    }
}