package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetByteMatchSetRequest {
    public GetByteMatchSetHeaders headers;
    public GetByteMatchSetRequest withHeaders(GetByteMatchSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetByteMatchSetRequest request;
    public GetByteMatchSetRequest withRequest(openapisdk.models.shared.GetByteMatchSetRequest request) {
        this.request = request;
        return this;
    }
}