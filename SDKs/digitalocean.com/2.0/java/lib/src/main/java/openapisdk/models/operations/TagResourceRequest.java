package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourceRequest {
    public TagResourcePathParams pathParams;
    public TagResourceRequest withPathParams(TagResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TagResourceRequestBody request;
    public TagResourceRequest withRequest(TagResourceRequestBody request) {
        this.request = request;
        return this;
    }
}