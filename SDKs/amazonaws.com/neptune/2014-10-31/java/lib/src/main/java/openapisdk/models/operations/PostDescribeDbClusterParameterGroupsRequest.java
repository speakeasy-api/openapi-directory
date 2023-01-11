package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterParameterGroupsRequest {
    public PostDescribeDbClusterParameterGroupsQueryParams queryParams;
    public PostDescribeDbClusterParameterGroupsRequest withQueryParams(PostDescribeDbClusterParameterGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterParameterGroupsHeaders headers;
    public PostDescribeDbClusterParameterGroupsRequest withHeaders(PostDescribeDbClusterParameterGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterParameterGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}