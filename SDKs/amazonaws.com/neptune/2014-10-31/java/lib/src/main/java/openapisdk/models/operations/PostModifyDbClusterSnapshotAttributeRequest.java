package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterSnapshotAttributeRequest {
    public PostModifyDbClusterSnapshotAttributeQueryParams queryParams;
    public PostModifyDbClusterSnapshotAttributeRequest withQueryParams(PostModifyDbClusterSnapshotAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbClusterSnapshotAttributeHeaders headers;
    public PostModifyDbClusterSnapshotAttributeRequest withHeaders(PostModifyDbClusterSnapshotAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbClusterSnapshotAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}