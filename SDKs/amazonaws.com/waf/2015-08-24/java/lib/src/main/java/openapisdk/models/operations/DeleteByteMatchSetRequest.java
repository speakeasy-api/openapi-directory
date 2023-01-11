package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteByteMatchSetRequest {
    public DeleteByteMatchSetHeaders headers;
    public DeleteByteMatchSetRequest withHeaders(DeleteByteMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteByteMatchSetRequest request;
    public DeleteByteMatchSetRequest withRequest(openapisdk.models.shared.DeleteByteMatchSetRequest request) {
        this.request = request;
        return this;
    }
}