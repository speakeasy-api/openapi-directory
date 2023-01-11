package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplySchemaRequest {
    public ApplySchemaHeaders headers;
    public ApplySchemaRequest withHeaders(ApplySchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ApplySchemaRequestBody request;
    public ApplySchemaRequest withRequest(ApplySchemaRequestBody request) {
        this.request = request;
        return this;
    }
}