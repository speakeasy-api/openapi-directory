package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingRequest {
    public CreateThingPathParams pathParams;
    public CreateThingRequest withPathParams(CreateThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateThingHeaders headers;
    public CreateThingRequest withHeaders(CreateThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateThingRequestBody request;
    public CreateThingRequest withRequest(CreateThingRequestBody request) {
        this.request = request;
        return this;
    }
}