package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetDashboardRequest {
    public PostGetDashboardQueryParams queryParams;
    public PostGetDashboardRequest withQueryParams(PostGetDashboardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetDashboardHeaders headers;
    public PostGetDashboardRequest withHeaders(PostGetDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetDashboardRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}