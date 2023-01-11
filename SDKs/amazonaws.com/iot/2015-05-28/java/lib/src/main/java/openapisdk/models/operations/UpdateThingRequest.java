package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingRequest {
    public UpdateThingPathParams pathParams;
    public UpdateThingRequest withPathParams(UpdateThingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateThingHeaders headers;
    public UpdateThingRequest withHeaders(UpdateThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateThingRequestBody request;
    public UpdateThingRequest withRequest(UpdateThingRequestBody request) {
        this.request = request;
        return this;
    }
}