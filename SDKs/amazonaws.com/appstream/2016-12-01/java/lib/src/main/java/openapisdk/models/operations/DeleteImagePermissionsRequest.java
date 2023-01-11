package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteImagePermissionsRequest {
    public DeleteImagePermissionsHeaders headers;
    public DeleteImagePermissionsRequest withHeaders(DeleteImagePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteImagePermissionsRequest request;
    public DeleteImagePermissionsRequest withRequest(openapisdk.models.shared.DeleteImagePermissionsRequest request) {
        this.request = request;
        return this;
    }
}