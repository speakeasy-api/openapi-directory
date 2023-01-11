package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RefreshSchemasRequest {
    public RefreshSchemasHeaders headers;
    public RefreshSchemasRequest withHeaders(RefreshSchemasHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RefreshSchemasMessage request;
    public RefreshSchemasRequest withRequest(openapisdk.models.shared.RefreshSchemasMessage request) {
        this.request = request;
        return this;
    }
}