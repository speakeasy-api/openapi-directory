package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetXssMatchSetRequest {
    public GetXssMatchSetHeaders headers;
    public GetXssMatchSetRequest withHeaders(GetXssMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetXssMatchSetRequest request;
    public GetXssMatchSetRequest withRequest(openapisdk.models.shared.GetXssMatchSetRequest request) {
        this.request = request;
        return this;
    }
}