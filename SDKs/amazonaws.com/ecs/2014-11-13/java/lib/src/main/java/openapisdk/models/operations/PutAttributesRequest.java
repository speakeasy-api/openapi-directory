package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAttributesRequest {
    public PutAttributesHeaders headers;
    public PutAttributesRequest withHeaders(PutAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAttributesRequest request;
    public PutAttributesRequest withRequest(openapisdk.models.shared.PutAttributesRequest request) {
        this.request = request;
        return this;
    }
}