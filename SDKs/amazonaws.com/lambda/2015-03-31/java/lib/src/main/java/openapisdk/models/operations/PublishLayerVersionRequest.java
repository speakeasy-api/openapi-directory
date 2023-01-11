package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishLayerVersionRequest {
    public PublishLayerVersionPathParams pathParams;
    public PublishLayerVersionRequest withPathParams(PublishLayerVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PublishLayerVersionHeaders headers;
    public PublishLayerVersionRequest withHeaders(PublishLayerVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishLayerVersionRequestBody request;
    public PublishLayerVersionRequest withRequest(PublishLayerVersionRequestBody request) {
        this.request = request;
        return this;
    }
}