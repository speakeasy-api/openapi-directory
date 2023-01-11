package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRadiusRequest {
    public UpdateRadiusHeaders headers;
    public UpdateRadiusRequest withHeaders(UpdateRadiusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateRadiusRequest request;
    public UpdateRadiusRequest withRequest(openapisdk.models.shared.UpdateRadiusRequest request) {
        this.request = request;
        return this;
    }
}