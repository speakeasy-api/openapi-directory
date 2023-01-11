package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePrimaryRegionRequest {
    public UpdatePrimaryRegionHeaders headers;
    public UpdatePrimaryRegionRequest withHeaders(UpdatePrimaryRegionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePrimaryRegionRequest request;
    public UpdatePrimaryRegionRequest withRequest(openapisdk.models.shared.UpdatePrimaryRegionRequest request) {
        this.request = request;
        return this;
    }
}