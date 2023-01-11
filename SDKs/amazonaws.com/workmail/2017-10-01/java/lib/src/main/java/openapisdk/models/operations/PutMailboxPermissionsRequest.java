package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMailboxPermissionsRequest {
    public PutMailboxPermissionsHeaders headers;
    public PutMailboxPermissionsRequest withHeaders(PutMailboxPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutMailboxPermissionsRequest request;
    public PutMailboxPermissionsRequest withRequest(openapisdk.models.shared.PutMailboxPermissionsRequest request) {
        this.request = request;
        return this;
    }
}