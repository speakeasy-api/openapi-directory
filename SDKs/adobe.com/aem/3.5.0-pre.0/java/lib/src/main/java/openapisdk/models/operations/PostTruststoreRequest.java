package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTruststoreRequest {
    public PostTruststoreQueryParams queryParams;
    public PostTruststoreRequest withQueryParams(PostTruststoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostTruststoreRequestBody request;
    public PostTruststoreRequest withRequest(PostTruststoreRequestBody request) {
        this.request = request;
        return this;
    }
}