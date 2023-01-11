package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetReputationMetricsEnabledRequest {
    public PostUpdateConfigurationSetReputationMetricsEnabledQueryParams queryParams;
    public PostUpdateConfigurationSetReputationMetricsEnabledRequest withQueryParams(PostUpdateConfigurationSetReputationMetricsEnabledQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateConfigurationSetReputationMetricsEnabledHeaders headers;
    public PostUpdateConfigurationSetReputationMetricsEnabledRequest withHeaders(PostUpdateConfigurationSetReputationMetricsEnabledHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateConfigurationSetReputationMetricsEnabledRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}