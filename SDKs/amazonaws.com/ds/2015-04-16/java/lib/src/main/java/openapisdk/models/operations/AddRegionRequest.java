package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddRegionRequest {
    public AddRegionHeaders headers;
    public AddRegionRequest withHeaders(AddRegionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddRegionRequest request;
    public AddRegionRequest withRequest(openapisdk.models.shared.AddRegionRequest request) {
        this.request = request;
        return this;
    }
}