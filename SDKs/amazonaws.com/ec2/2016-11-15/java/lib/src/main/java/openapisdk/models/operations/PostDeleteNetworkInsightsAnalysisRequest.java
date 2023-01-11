package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInsightsAnalysisRequest {
    public PostDeleteNetworkInsightsAnalysisQueryParams queryParams;
    public PostDeleteNetworkInsightsAnalysisRequest withQueryParams(PostDeleteNetworkInsightsAnalysisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNetworkInsightsAnalysisHeaders headers;
    public PostDeleteNetworkInsightsAnalysisRequest withHeaders(PostDeleteNetworkInsightsAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNetworkInsightsAnalysisRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}