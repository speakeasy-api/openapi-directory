package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutResourceAttributesRequest {
    public PutResourceAttributesHeaders headers;
    public PutResourceAttributesRequest withHeaders(PutResourceAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutResourceAttributesRequest request;
    public PutResourceAttributesRequest withRequest(openapisdk.models.shared.PutResourceAttributesRequest request) {
        this.request = request;
        return this;
    }
}