package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckSchemaVersionValidityRequest {
    public CheckSchemaVersionValidityHeaders headers;
    public CheckSchemaVersionValidityRequest withHeaders(CheckSchemaVersionValidityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckSchemaVersionValidityInput request;
    public CheckSchemaVersionValidityRequest withRequest(openapisdk.models.shared.CheckSchemaVersionValidityInput request) {
        this.request = request;
        return this;
    }
}