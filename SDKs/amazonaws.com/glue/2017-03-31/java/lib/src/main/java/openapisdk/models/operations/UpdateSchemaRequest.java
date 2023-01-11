package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSchemaRequest {
    public UpdateSchemaHeaders headers;
    public UpdateSchemaRequest withHeaders(UpdateSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSchemaInput request;
    public UpdateSchemaRequest withRequest(openapisdk.models.shared.UpdateSchemaInput request) {
        this.request = request;
        return this;
    }
}