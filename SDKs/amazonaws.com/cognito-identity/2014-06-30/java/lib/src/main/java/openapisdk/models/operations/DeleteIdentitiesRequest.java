package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteIdentitiesRequest {
    public DeleteIdentitiesHeaders headers;
    public DeleteIdentitiesRequest withHeaders(DeleteIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteIdentitiesInput request;
    public DeleteIdentitiesRequest withRequest(openapisdk.models.shared.DeleteIdentitiesInput request) {
        this.request = request;
        return this;
    }
}