package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagOptionRequest {
    public UpdateTagOptionHeaders headers;
    public UpdateTagOptionRequest withHeaders(UpdateTagOptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTagOptionInput request;
    public UpdateTagOptionRequest withRequest(openapisdk.models.shared.UpdateTagOptionInput request) {
        this.request = request;
        return this;
    }
}