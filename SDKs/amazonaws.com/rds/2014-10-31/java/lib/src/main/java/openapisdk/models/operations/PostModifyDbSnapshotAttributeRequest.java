package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbSnapshotAttributeRequest {
    public PostModifyDbSnapshotAttributeQueryParams queryParams;
    public PostModifyDbSnapshotAttributeRequest withQueryParams(PostModifyDbSnapshotAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyDbSnapshotAttributeHeaders headers;
    public PostModifyDbSnapshotAttributeRequest withHeaders(PostModifyDbSnapshotAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyDbSnapshotAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}