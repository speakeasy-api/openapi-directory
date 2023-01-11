package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishVersionRequest {
    public PublishVersionPathParams pathParams;
    public PublishVersionRequest withPathParams(PublishVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishVersionHeaders headers;
    public PublishVersionRequest withHeaders(PublishVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishVersionRequestBody request;
    public PublishVersionRequest withRequest(PublishVersionRequestBody request) {
        this.request = request;
        return this;
    }
}