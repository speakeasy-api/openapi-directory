package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGeoMatchSetRequest {
    public DeleteGeoMatchSetHeaders headers;
    public DeleteGeoMatchSetRequest withHeaders(DeleteGeoMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteGeoMatchSetRequest request;
    public DeleteGeoMatchSetRequest withRequest(openapisdk.models.shared.DeleteGeoMatchSetRequest request) {
        this.request = request;
        return this;
    }
}