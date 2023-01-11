package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTableRequest {
    public DeleteTableHeaders headers;
    public DeleteTableRequest withHeaders(DeleteTableHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTableInput request;
    public DeleteTableRequest withRequest(openapisdk.models.shared.DeleteTableInput request) {
        this.request = request;
        return this;
    }
}