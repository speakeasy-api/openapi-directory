package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotCopyRetentionPeriodRequest {
    public PostModifySnapshotCopyRetentionPeriodQueryParams queryParams;
    public PostModifySnapshotCopyRetentionPeriodRequest withQueryParams(PostModifySnapshotCopyRetentionPeriodQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifySnapshotCopyRetentionPeriodHeaders headers;
    public PostModifySnapshotCopyRetentionPeriodRequest withHeaders(PostModifySnapshotCopyRetentionPeriodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifySnapshotCopyRetentionPeriodRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}