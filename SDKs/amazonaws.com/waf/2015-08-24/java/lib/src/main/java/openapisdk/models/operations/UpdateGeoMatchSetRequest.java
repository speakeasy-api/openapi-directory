package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGeoMatchSetRequest {
    public UpdateGeoMatchSetHeaders headers;
    public UpdateGeoMatchSetRequest withHeaders(UpdateGeoMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateGeoMatchSetRequest request;
    public UpdateGeoMatchSetRequest withRequest(openapisdk.models.shared.UpdateGeoMatchSetRequest request) {
        this.request = request;
        return this;
    }
}