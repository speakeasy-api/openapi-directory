package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTableRequest {
    public UpdateTableHeaders headers;
    public UpdateTableRequest withHeaders(UpdateTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTableInput request;
    public UpdateTableRequest withRequest(openapisdk.models.shared.UpdateTableInput request) {
        this.request = request;
        return this;
    }
}