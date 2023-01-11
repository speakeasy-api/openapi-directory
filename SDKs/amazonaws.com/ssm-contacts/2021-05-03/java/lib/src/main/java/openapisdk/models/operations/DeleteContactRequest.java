package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteContactRequest {
    public DeleteContactHeaders headers;
    public DeleteContactRequest withHeaders(DeleteContactHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteContactRequest request;
    public DeleteContactRequest withRequest(openapisdk.models.shared.DeleteContactRequest request) {
        this.request = request;
        return this;
    }
}