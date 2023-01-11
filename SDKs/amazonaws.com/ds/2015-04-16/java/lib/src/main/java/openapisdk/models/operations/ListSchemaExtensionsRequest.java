package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSchemaExtensionsRequest {
    public ListSchemaExtensionsHeaders headers;
    public ListSchemaExtensionsRequest withHeaders(ListSchemaExtensionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListSchemaExtensionsRequest request;
    public ListSchemaExtensionsRequest withRequest(openapisdk.models.shared.ListSchemaExtensionsRequest request) {
        this.request = request;
        return this;
    }
}