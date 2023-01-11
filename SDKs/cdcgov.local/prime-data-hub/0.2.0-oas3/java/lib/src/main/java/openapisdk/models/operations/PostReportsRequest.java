package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportsRequest {
    public PostReportsQueryParams queryParams;
    public PostReportsRequest withQueryParams(PostReportsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/csv")
    public String request;
    public PostReportsRequest withRequest(String request) {
        this.request = request;
        return this;
    }
    public PostReportsSecurity security;
    public PostReportsRequest withSecurity(PostReportsSecurity security) {
        this.security = security;
        return this;
    }
}