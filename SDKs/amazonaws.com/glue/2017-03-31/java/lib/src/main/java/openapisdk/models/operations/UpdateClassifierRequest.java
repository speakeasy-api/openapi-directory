package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateClassifierRequest {
    public UpdateClassifierHeaders headers;
    public UpdateClassifierRequest withHeaders(UpdateClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateClassifierRequest request;
    public UpdateClassifierRequest withRequest(openapisdk.models.shared.UpdateClassifierRequest request) {
        this.request = request;
        return this;
    }
}