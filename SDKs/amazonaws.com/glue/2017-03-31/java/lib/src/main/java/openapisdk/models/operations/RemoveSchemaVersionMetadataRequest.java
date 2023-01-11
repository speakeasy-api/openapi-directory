package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSchemaVersionMetadataRequest {
    public RemoveSchemaVersionMetadataHeaders headers;
    public RemoveSchemaVersionMetadataRequest withHeaders(RemoveSchemaVersionMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveSchemaVersionMetadataInput request;
    public RemoveSchemaVersionMetadataRequest withRequest(openapisdk.models.shared.RemoveSchemaVersionMetadataInput request) {
        this.request = request;
        return this;
    }
}