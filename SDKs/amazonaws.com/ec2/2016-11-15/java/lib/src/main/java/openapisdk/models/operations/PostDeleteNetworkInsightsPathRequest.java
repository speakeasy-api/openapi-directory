package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteNetworkInsightsPathRequest {
    public PostDeleteNetworkInsightsPathQueryParams queryParams;
    public PostDeleteNetworkInsightsPathRequest withQueryParams(PostDeleteNetworkInsightsPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteNetworkInsightsPathHeaders headers;
    public PostDeleteNetworkInsightsPathRequest withHeaders(PostDeleteNetworkInsightsPathHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteNetworkInsightsPathRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}