package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReplaceRootVolumeTasksRequest {
    public PostDescribeReplaceRootVolumeTasksQueryParams queryParams;
    public PostDescribeReplaceRootVolumeTasksRequest withQueryParams(PostDescribeReplaceRootVolumeTasksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReplaceRootVolumeTasksHeaders headers;
    public PostDescribeReplaceRootVolumeTasksRequest withHeaders(PostDescribeReplaceRootVolumeTasksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReplaceRootVolumeTasksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}