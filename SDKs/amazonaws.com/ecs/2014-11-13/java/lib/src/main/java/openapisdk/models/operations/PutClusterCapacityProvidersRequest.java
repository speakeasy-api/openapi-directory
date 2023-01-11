package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutClusterCapacityProvidersRequest {
    public PutClusterCapacityProvidersHeaders headers;
    public PutClusterCapacityProvidersRequest withHeaders(PutClusterCapacityProvidersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutClusterCapacityProvidersRequest request;
    public PutClusterCapacityProvidersRequest withRequest(openapisdk.models.shared.PutClusterCapacityProvidersRequest request) {
        this.request = request;
        return this;
    }
}