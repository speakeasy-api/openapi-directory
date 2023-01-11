package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMlModelRequest {
    public UpdateMlModelHeaders headers;
    public UpdateMlModelRequest withHeaders(UpdateMlModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMlModelInput request;
    public UpdateMlModelRequest withRequest(openapisdk.models.shared.UpdateMlModelInput request) {
        this.request = request;
        return this;
    }
}