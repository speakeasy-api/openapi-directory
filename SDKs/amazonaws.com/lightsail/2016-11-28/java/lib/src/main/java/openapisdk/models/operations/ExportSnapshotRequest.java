package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportSnapshotRequest {
    public ExportSnapshotHeaders headers;
    public ExportSnapshotRequest withHeaders(ExportSnapshotHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExportSnapshotRequest request;
    public ExportSnapshotRequest withRequest(openapisdk.models.shared.ExportSnapshotRequest request) {
        this.request = request;
        return this;
    }
}