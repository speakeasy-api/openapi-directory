package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcesByExternalIdRequest {
    public DeleteResourcesByExternalIdHeaders headers;
    public DeleteResourcesByExternalIdRequest withHeaders(DeleteResourcesByExternalIdHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteResourcesByExternalIdInput request;
    public DeleteResourcesByExternalIdRequest withRequest(openapisdk.models.shared.DeleteResourcesByExternalIdInput request) {
        this.request = request;
        return this;
    }
}