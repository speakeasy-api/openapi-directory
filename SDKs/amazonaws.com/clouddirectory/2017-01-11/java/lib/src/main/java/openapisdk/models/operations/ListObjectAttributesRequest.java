package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectAttributesRequest {
    public ListObjectAttributesQueryParams queryParams;
    public ListObjectAttributesRequest withQueryParams(ListObjectAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListObjectAttributesHeaders headers;
    public ListObjectAttributesRequest withHeaders(ListObjectAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListObjectAttributesRequestBody request;
    public ListObjectAttributesRequest withRequest(ListObjectAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}