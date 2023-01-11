package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTypedLinkFacetRequest {
    public DeleteTypedLinkFacetHeaders headers;
    public DeleteTypedLinkFacetRequest withHeaders(DeleteTypedLinkFacetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteTypedLinkFacetRequestBody request;
    public DeleteTypedLinkFacetRequest withRequest(DeleteTypedLinkFacetRequestBody request) {
        this.request = request;
        return this;
    }
}