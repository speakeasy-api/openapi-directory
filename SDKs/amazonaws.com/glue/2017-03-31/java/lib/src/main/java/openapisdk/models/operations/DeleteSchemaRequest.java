package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSchemaRequest {
    public DeleteSchemaHeaders headers;
    public DeleteSchemaRequest withHeaders(DeleteSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSchemaInput request;
    public DeleteSchemaRequest withRequest(openapisdk.models.shared.DeleteSchemaInput request) {
        this.request = request;
        return this;
    }
}