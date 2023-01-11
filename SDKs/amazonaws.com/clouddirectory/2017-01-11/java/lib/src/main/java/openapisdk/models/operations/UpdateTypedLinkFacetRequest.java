package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTypedLinkFacetRequest {
    public UpdateTypedLinkFacetHeaders headers;
    public UpdateTypedLinkFacetRequest withHeaders(UpdateTypedLinkFacetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTypedLinkFacetRequestBody request;
    public UpdateTypedLinkFacetRequest withRequest(UpdateTypedLinkFacetRequestBody request) {
        this.request = request;
        return this;
    }
}