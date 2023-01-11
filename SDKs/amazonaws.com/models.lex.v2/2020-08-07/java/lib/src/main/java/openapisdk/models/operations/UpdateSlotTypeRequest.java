package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSlotTypeRequest {
    public UpdateSlotTypePathParams pathParams;
    public UpdateSlotTypeRequest withPathParams(UpdateSlotTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateSlotTypeHeaders headers;
    public UpdateSlotTypeRequest withHeaders(UpdateSlotTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSlotTypeRequestBody request;
    public UpdateSlotTypeRequest withRequest(UpdateSlotTypeRequestBody request) {
        this.request = request;
        return this;
    }
}