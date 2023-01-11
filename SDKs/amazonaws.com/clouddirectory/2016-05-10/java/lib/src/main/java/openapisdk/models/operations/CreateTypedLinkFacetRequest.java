package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTypedLinkFacetRequest {
    public CreateTypedLinkFacetHeaders headers;
    public CreateTypedLinkFacetRequest withHeaders(CreateTypedLinkFacetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTypedLinkFacetRequestBody request;
    public CreateTypedLinkFacetRequest withRequest(CreateTypedLinkFacetRequestBody request) {
        this.request = request;
        return this;
    }
}