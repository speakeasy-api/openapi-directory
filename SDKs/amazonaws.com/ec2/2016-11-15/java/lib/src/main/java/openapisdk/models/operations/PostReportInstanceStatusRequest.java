package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReportInstanceStatusRequest {
    public PostReportInstanceStatusQueryParams queryParams;
    public PostReportInstanceStatusRequest withQueryParams(PostReportInstanceStatusQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostReportInstanceStatusHeaders headers;
    public PostReportInstanceStatusRequest withHeaders(PostReportInstanceStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostReportInstanceStatusRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}