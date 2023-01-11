package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateXssMatchSetRequest {
    public UpdateXssMatchSetHeaders headers;
    public UpdateXssMatchSetRequest withHeaders(UpdateXssMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateXssMatchSetRequest request;
    public UpdateXssMatchSetRequest withRequest(openapisdk.models.shared.UpdateXssMatchSetRequest request) {
        this.request = request;
        return this;
    }
}