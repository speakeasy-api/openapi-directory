package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTypedLinkFacetInformationRequest {
    public GetTypedLinkFacetInformationHeaders headers;
    public GetTypedLinkFacetInformationRequest withHeaders(GetTypedLinkFacetInformationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetTypedLinkFacetInformationRequestBody request;
    public GetTypedLinkFacetInformationRequest withRequest(GetTypedLinkFacetInformationRequestBody request) {
        this.request = request;
        return this;
    }
}