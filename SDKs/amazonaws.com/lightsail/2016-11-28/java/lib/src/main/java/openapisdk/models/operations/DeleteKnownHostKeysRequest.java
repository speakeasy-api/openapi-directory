package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteKnownHostKeysRequest {
    public DeleteKnownHostKeysHeaders headers;
    public DeleteKnownHostKeysRequest withHeaders(DeleteKnownHostKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteKnownHostKeysRequest request;
    public DeleteKnownHostKeysRequest withRequest(openapisdk.models.shared.DeleteKnownHostKeysRequest request) {
        this.request = request;
        return this;
    }
}