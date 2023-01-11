package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSchemaVersionsRequest {
    public DeleteSchemaVersionsHeaders headers;
    public DeleteSchemaVersionsRequest withHeaders(DeleteSchemaVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSchemaVersionsInput request;
    public DeleteSchemaVersionsRequest withRequest(openapisdk.models.shared.DeleteSchemaVersionsInput request) {
        this.request = request;
        return this;
    }
}