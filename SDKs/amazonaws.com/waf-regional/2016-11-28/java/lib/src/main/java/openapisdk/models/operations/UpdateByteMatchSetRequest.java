package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateByteMatchSetRequest {
    public UpdateByteMatchSetHeaders headers;
    public UpdateByteMatchSetRequest withHeaders(UpdateByteMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateByteMatchSetRequest request;
    public UpdateByteMatchSetRequest withRequest(openapisdk.models.shared.UpdateByteMatchSetRequest request) {
        this.request = request;
        return this;
    }
}