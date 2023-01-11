package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHostRequest {
    public DeleteHostHeaders headers;
    public DeleteHostRequest withHeaders(DeleteHostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteHostInput request;
    public DeleteHostRequest withRequest(openapisdk.models.shared.DeleteHostInput request) {
        this.request = request;
        return this;
    }
}