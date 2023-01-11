package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSchemaVersionMetadataRequest {
    public PutSchemaVersionMetadataHeaders headers;
    public PutSchemaVersionMetadataRequest withHeaders(PutSchemaVersionMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutSchemaVersionMetadataInput request;
    public PutSchemaVersionMetadataRequest withRequest(openapisdk.models.shared.PutSchemaVersionMetadataInput request) {
        this.request = request;
        return this;
    }
}