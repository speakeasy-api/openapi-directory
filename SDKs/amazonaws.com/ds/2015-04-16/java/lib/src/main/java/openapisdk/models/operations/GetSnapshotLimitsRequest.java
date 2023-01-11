package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSnapshotLimitsRequest {
    public GetSnapshotLimitsHeaders headers;
    public GetSnapshotLimitsRequest withHeaders(GetSnapshotLimitsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSnapshotLimitsRequest request;
    public GetSnapshotLimitsRequest withRequest(openapisdk.models.shared.GetSnapshotLimitsRequest request) {
        this.request = request;
        return this;
    }
}