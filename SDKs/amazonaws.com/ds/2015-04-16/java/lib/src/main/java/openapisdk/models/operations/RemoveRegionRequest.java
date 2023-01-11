package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRegionRequest {
    public RemoveRegionHeaders headers;
    public RemoveRegionRequest withHeaders(RemoveRegionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveRegionRequest request;
    public RemoveRegionRequest withRequest(openapisdk.models.shared.RemoveRegionRequest request) {
        this.request = request;
        return this;
    }
}