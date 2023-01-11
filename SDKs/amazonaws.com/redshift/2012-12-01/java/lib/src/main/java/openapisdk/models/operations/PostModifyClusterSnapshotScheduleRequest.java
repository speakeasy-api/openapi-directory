package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterSnapshotScheduleRequest {
    public PostModifyClusterSnapshotScheduleQueryParams queryParams;
    public PostModifyClusterSnapshotScheduleRequest withQueryParams(PostModifyClusterSnapshotScheduleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyClusterSnapshotScheduleHeaders headers;
    public PostModifyClusterSnapshotScheduleRequest withHeaders(PostModifyClusterSnapshotScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyClusterSnapshotScheduleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}