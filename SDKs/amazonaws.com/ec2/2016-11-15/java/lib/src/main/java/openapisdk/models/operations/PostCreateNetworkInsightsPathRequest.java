package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateNetworkInsightsPathRequest {
    public PostCreateNetworkInsightsPathQueryParams queryParams;
    public PostCreateNetworkInsightsPathRequest withQueryParams(PostCreateNetworkInsightsPathQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateNetworkInsightsPathHeaders headers;
    public PostCreateNetworkInsightsPathRequest withHeaders(PostCreateNetworkInsightsPathHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateNetworkInsightsPathRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}