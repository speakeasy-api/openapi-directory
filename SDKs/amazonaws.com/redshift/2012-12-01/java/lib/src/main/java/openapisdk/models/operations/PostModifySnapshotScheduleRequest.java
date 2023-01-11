package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotScheduleRequest {
    public PostModifySnapshotScheduleQueryParams queryParams;
    public PostModifySnapshotScheduleRequest withQueryParams(PostModifySnapshotScheduleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifySnapshotScheduleHeaders headers;
    public PostModifySnapshotScheduleRequest withHeaders(PostModifySnapshotScheduleHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifySnapshotScheduleRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}