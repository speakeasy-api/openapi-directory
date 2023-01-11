package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeoMatchSetRequest {
    public GetGeoMatchSetHeaders headers;
    public GetGeoMatchSetRequest withHeaders(GetGeoMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetGeoMatchSetRequest request;
    public GetGeoMatchSetRequest withRequest(openapisdk.models.shared.GetGeoMatchSetRequest request) {
        this.request = request;
        return this;
    }
}