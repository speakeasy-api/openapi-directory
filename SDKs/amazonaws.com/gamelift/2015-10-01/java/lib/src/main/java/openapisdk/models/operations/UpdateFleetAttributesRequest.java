package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFleetAttributesRequest {
    public UpdateFleetAttributesHeaders headers;
    public UpdateFleetAttributesRequest withHeaders(UpdateFleetAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFleetAttributesInput request;
    public UpdateFleetAttributesRequest withRequest(openapisdk.models.shared.UpdateFleetAttributesInput request) {
        this.request = request;
        return this;
    }
}