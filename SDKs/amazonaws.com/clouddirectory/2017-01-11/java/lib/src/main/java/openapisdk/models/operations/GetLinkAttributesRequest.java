package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLinkAttributesRequest {
    public GetLinkAttributesHeaders headers;
    public GetLinkAttributesRequest withHeaders(GetLinkAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetLinkAttributesRequestBody request;
    public GetLinkAttributesRequest withRequest(GetLinkAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}