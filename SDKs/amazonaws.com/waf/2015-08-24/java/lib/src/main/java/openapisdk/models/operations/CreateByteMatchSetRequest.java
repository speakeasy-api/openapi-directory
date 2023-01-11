package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateByteMatchSetRequest {
    public CreateByteMatchSetHeaders headers;
    public CreateByteMatchSetRequest withHeaders(CreateByteMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateByteMatchSetRequest request;
    public CreateByteMatchSetRequest withRequest(openapisdk.models.shared.CreateByteMatchSetRequest request) {
        this.request = request;
        return this;
    }
}