package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetInsightRuleReportRequest {
    public PostGetInsightRuleReportQueryParams queryParams;
    public PostGetInsightRuleReportRequest withQueryParams(PostGetInsightRuleReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetInsightRuleReportHeaders headers;
    public PostGetInsightRuleReportRequest withHeaders(PostGetInsightRuleReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetInsightRuleReportRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}