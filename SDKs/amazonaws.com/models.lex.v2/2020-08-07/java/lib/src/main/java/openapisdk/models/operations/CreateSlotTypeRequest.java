package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSlotTypeRequest {
    public CreateSlotTypePathParams pathParams;
    public CreateSlotTypeRequest withPathParams(CreateSlotTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSlotTypeHeaders headers;
    public CreateSlotTypeRequest withHeaders(CreateSlotTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSlotTypeRequestBody request;
    public CreateSlotTypeRequest withRequest(CreateSlotTypeRequestBody request) {
        this.request = request;
        return this;
    }
}