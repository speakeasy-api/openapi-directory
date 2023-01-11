package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifySnapshotAttributeRequest {
    public PostModifySnapshotAttributeQueryParams queryParams;
    public PostModifySnapshotAttributeRequest withQueryParams(PostModifySnapshotAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifySnapshotAttributeHeaders headers;
    public PostModifySnapshotAttributeRequest withHeaders(PostModifySnapshotAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifySnapshotAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}