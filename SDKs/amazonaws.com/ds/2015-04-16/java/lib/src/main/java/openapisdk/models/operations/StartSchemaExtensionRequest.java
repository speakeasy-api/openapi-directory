package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSchemaExtensionRequest {
    public StartSchemaExtensionHeaders headers;
    public StartSchemaExtensionRequest withHeaders(StartSchemaExtensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartSchemaExtensionRequest request;
    public StartSchemaExtensionRequest withRequest(openapisdk.models.shared.StartSchemaExtensionRequest request) {
        this.request = request;
        return this;
    }
}