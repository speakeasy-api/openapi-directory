package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchRevokePermissionsRequest {
    public BatchRevokePermissionsHeaders headers;
    public BatchRevokePermissionsRequest withHeaders(BatchRevokePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchRevokePermissionsRequest request;
    public BatchRevokePermissionsRequest withRequest(openapisdk.models.shared.BatchRevokePermissionsRequest request) {
        this.request = request;
        return this;
    }
}