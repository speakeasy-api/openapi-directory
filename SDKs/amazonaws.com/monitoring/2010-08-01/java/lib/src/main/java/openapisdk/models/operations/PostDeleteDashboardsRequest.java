package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDashboardsRequest {
    public PostDeleteDashboardsQueryParams queryParams;
    public PostDeleteDashboardsRequest withQueryParams(PostDeleteDashboardsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteDashboardsHeaders headers;
    public PostDeleteDashboardsRequest withHeaders(PostDeleteDashboardsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteDashboardsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}