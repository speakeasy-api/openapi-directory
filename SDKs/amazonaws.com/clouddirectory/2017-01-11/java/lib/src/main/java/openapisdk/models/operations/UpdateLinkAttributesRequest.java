package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLinkAttributesRequest {
    public UpdateLinkAttributesHeaders headers;
    public UpdateLinkAttributesRequest withHeaders(UpdateLinkAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateLinkAttributesRequestBody request;
    public UpdateLinkAttributesRequest withRequest(UpdateLinkAttributesRequestBody request) {
        this.request = request;
        return this;
    }
}