package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExportSnapshotRecordsRequest {
    public GetExportSnapshotRecordsHeaders headers;
    public GetExportSnapshotRecordsRequest withHeaders(GetExportSnapshotRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetExportSnapshotRecordsRequest request;
    public GetExportSnapshotRecordsRequest withRequest(openapisdk.models.shared.GetExportSnapshotRecordsRequest request) {
        this.request = request;
        return this;
    }
}