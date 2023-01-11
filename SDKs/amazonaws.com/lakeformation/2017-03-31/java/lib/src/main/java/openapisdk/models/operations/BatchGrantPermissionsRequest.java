package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGrantPermissionsRequest {
    public BatchGrantPermissionsHeaders headers;
    public BatchGrantPermissionsRequest withHeaders(BatchGrantPermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchGrantPermissionsRequest request;
    public BatchGrantPermissionsRequest withRequest(openapisdk.models.shared.BatchGrantPermissionsRequest request) {
        this.request = request;
        return this;
    }
}