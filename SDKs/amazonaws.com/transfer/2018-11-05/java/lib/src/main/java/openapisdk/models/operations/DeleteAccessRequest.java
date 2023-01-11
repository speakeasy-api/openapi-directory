package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAccessRequest {
    public DeleteAccessHeaders headers;
    public DeleteAccessRequest withHeaders(DeleteAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAccessRequest request;
    public DeleteAccessRequest withRequest(openapisdk.models.shared.DeleteAccessRequest request) {
        this.request = request;
        return this;
    }
}