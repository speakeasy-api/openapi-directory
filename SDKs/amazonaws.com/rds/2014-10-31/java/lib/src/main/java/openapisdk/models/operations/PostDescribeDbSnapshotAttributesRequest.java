package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSnapshotAttributesRequest {
    public PostDescribeDbSnapshotAttributesQueryParams queryParams;
    public PostDescribeDbSnapshotAttributesRequest withQueryParams(PostDescribeDbSnapshotAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbSnapshotAttributesHeaders headers;
    public PostDescribeDbSnapshotAttributesRequest withHeaders(PostDescribeDbSnapshotAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbSnapshotAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}