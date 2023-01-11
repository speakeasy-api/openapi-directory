package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateThingTypeRequest {
    public CreateThingTypePathParams pathParams;
    public CreateThingTypeRequest withPathParams(CreateThingTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateThingTypeHeaders headers;
    public CreateThingTypeRequest withHeaders(CreateThingTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateThingTypeRequestBody request;
    public CreateThingTypeRequest withRequest(CreateThingTypeRequestBody request) {
        this.request = request;
        return this;
    }
}