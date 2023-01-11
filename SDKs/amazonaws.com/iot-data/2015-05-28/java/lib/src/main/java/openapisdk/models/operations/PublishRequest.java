package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishRequest {
    public PublishPathParams pathParams;
    public PublishRequest withPathParams(PublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishQueryParams queryParams;
    public PublishRequest withQueryParams(PublishQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PublishHeaders headers;
    public PublishRequest withHeaders(PublishHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishRequestBody request;
    public PublishRequest withRequest(PublishRequestBody request) {
        this.request = request;
        return this;
    }
}