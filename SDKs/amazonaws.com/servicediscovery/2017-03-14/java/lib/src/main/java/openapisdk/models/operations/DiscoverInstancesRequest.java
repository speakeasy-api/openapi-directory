package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscoverInstancesRequest {
    public DiscoverInstancesHeaders headers;
    public DiscoverInstancesRequest withHeaders(DiscoverInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DiscoverInstancesRequest request;
    public DiscoverInstancesRequest withRequest(openapisdk.models.shared.DiscoverInstancesRequest request) {
        this.request = request;
        return this;
    }
}