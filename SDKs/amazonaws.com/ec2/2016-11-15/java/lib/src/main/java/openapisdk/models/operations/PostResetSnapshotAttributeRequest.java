package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetSnapshotAttributeRequest {
    public PostResetSnapshotAttributeQueryParams queryParams;
    public PostResetSnapshotAttributeRequest withQueryParams(PostResetSnapshotAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostResetSnapshotAttributeHeaders headers;
    public PostResetSnapshotAttributeRequest withHeaders(PostResetSnapshotAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostResetSnapshotAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}