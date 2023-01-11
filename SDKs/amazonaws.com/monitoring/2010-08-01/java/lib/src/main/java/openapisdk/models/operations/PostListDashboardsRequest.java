package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListDashboardsRequest {
    public PostListDashboardsQueryParams queryParams;
    public PostListDashboardsRequest withQueryParams(PostListDashboardsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListDashboardsHeaders headers;
    public PostListDashboardsRequest withHeaders(PostListDashboardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListDashboardsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}