package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoverPollEndpointRequest {
    public DiscoverPollEndpointHeaders headers;
    public DiscoverPollEndpointRequest withHeaders(DiscoverPollEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscoverPollEndpointRequest request;
    public DiscoverPollEndpointRequest withRequest(openapisdk.models.shared.DiscoverPollEndpointRequest request) {
        this.request = request;
        return this;
    }
}