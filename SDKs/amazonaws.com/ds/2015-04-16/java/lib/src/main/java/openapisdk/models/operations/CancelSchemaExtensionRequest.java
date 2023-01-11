package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelSchemaExtensionRequest {
    public CancelSchemaExtensionHeaders headers;
    public CancelSchemaExtensionRequest withHeaders(CancelSchemaExtensionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelSchemaExtensionRequest request;
    public CancelSchemaExtensionRequest withRequest(openapisdk.models.shared.CancelSchemaExtensionRequest request) {
        this.request = request;
        return this;
    }
}