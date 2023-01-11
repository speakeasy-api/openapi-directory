package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateXssMatchSetRequest {
    public CreateXssMatchSetHeaders headers;
    public CreateXssMatchSetRequest withHeaders(CreateXssMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateXssMatchSetRequest request;
    public CreateXssMatchSetRequest withRequest(openapisdk.models.shared.CreateXssMatchSetRequest request) {
        this.request = request;
        return this;
    }
}