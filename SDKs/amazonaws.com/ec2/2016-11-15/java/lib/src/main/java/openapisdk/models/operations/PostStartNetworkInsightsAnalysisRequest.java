package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartNetworkInsightsAnalysisRequest {
    public PostStartNetworkInsightsAnalysisQueryParams queryParams;
    public PostStartNetworkInsightsAnalysisRequest withQueryParams(PostStartNetworkInsightsAnalysisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartNetworkInsightsAnalysisHeaders headers;
    public PostStartNetworkInsightsAnalysisRequest withHeaders(PostStartNetworkInsightsAnalysisHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartNetworkInsightsAnalysisRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}