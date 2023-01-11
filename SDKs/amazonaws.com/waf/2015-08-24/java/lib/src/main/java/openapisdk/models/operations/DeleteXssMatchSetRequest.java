package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteXssMatchSetRequest {
    public DeleteXssMatchSetHeaders headers;
    public DeleteXssMatchSetRequest withHeaders(DeleteXssMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteXssMatchSetRequest request;
    public DeleteXssMatchSetRequest withRequest(openapisdk.models.shared.DeleteXssMatchSetRequest request) {
        this.request = request;
        return this;
    }
}