package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActionTypeRequest {
    public UpdateActionTypeHeaders headers;
    public UpdateActionTypeRequest withHeaders(UpdateActionTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateActionTypeInput request;
    public UpdateActionTypeRequest withRequest(openapisdk.models.shared.UpdateActionTypeInput request) {
        this.request = request;
        return this;
    }
}