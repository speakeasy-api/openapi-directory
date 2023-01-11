package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContactRequest {
    public UpdateContactHeaders headers;
    public UpdateContactRequest withHeaders(UpdateContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateContactRequest request;
    public UpdateContactRequest withRequest(openapisdk.models.shared.UpdateContactRequest request) {
        this.request = request;
        return this;
    }
}