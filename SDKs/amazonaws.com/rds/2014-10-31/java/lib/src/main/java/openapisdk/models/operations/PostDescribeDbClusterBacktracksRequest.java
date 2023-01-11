package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterBacktracksRequest {
    public PostDescribeDbClusterBacktracksQueryParams queryParams;
    public PostDescribeDbClusterBacktracksRequest withQueryParams(PostDescribeDbClusterBacktracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterBacktracksHeaders headers;
    public PostDescribeDbClusterBacktracksRequest withHeaders(PostDescribeDbClusterBacktracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterBacktracksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}