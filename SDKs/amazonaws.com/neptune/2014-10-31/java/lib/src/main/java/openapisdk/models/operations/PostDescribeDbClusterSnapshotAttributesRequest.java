package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterSnapshotAttributesRequest {
    public PostDescribeDbClusterSnapshotAttributesQueryParams queryParams;
    public PostDescribeDbClusterSnapshotAttributesRequest withQueryParams(PostDescribeDbClusterSnapshotAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterSnapshotAttributesHeaders headers;
    public PostDescribeDbClusterSnapshotAttributesRequest withHeaders(PostDescribeDbClusterSnapshotAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterSnapshotAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}