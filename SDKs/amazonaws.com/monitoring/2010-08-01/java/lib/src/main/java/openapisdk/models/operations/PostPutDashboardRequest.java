package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutDashboardRequest {
    public PostPutDashboardQueryParams queryParams;
    public PostPutDashboardRequest withQueryParams(PostPutDashboardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutDashboardHeaders headers;
    public PostPutDashboardRequest withHeaders(PostPutDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutDashboardRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}