package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImagesRequest {
    public ListImagesQueryParams queryParams;
    public ListImagesRequest withQueryParams(ListImagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImagesHeaders headers;
    public ListImagesRequest withHeaders(ListImagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImagesRequestBody request;
    public ListImagesRequest withRequest(ListImagesRequestBody request) {
        this.request = request;
        return this;
    }
}