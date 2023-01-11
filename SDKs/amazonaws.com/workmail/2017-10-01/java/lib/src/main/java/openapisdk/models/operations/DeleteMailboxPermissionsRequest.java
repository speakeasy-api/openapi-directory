package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMailboxPermissionsRequest {
    public DeleteMailboxPermissionsHeaders headers;
    public DeleteMailboxPermissionsRequest withHeaders(DeleteMailboxPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteMailboxPermissionsRequest request;
    public DeleteMailboxPermissionsRequest withRequest(openapisdk.models.shared.DeleteMailboxPermissionsRequest request) {
        this.request = request;
        return this;
    }
}