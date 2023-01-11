package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGeoMatchSetRequest {
    public CreateGeoMatchSetHeaders headers;
    public CreateGeoMatchSetRequest withHeaders(CreateGeoMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGeoMatchSetRequest request;
    public CreateGeoMatchSetRequest withRequest(openapisdk.models.shared.CreateGeoMatchSetRequest request) {
        this.request = request;
        return this;
    }
}