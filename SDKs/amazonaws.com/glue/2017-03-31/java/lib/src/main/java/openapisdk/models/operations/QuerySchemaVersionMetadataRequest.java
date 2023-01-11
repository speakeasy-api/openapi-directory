package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuerySchemaVersionMetadataRequest {
    public QuerySchemaVersionMetadataHeaders headers;
    public QuerySchemaVersionMetadataRequest withHeaders(QuerySchemaVersionMetadataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QuerySchemaVersionMetadataInput request;
    public QuerySchemaVersionMetadataRequest withRequest(openapisdk.models.shared.QuerySchemaVersionMetadataInput request) {
        this.request = request;
        return this;
    }
}