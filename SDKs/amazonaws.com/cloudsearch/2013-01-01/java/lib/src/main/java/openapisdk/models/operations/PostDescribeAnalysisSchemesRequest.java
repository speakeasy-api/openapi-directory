package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAnalysisSchemesRequest {
    public PostDescribeAnalysisSchemesQueryParams queryParams;
    public PostDescribeAnalysisSchemesRequest withQueryParams(PostDescribeAnalysisSchemesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAnalysisSchemesHeaders headers;
    public PostDescribeAnalysisSchemesRequest withHeaders(PostDescribeAnalysisSchemesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAnalysisSchemesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}