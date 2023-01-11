package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaRequest {
    public GetSchemaHeaders headers;
    public GetSchemaRequest withHeaders(GetSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSchemaInput request;
    public GetSchemaRequest withRequest(openapisdk.models.shared.GetSchemaInput request) {
        this.request = request;
        return this;
    }
}