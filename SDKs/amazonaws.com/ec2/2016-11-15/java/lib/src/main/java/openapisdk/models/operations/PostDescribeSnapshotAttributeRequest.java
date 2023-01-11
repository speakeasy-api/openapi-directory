package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSnapshotAttributeRequest {
    public PostDescribeSnapshotAttributeQueryParams queryParams;
    public PostDescribeSnapshotAttributeRequest withQueryParams(PostDescribeSnapshotAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSnapshotAttributeHeaders headers;
    public PostDescribeSnapshotAttributeRequest withHeaders(PostDescribeSnapshotAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSnapshotAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}