package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpgradeAppliedSchemaRequest {
    public UpgradeAppliedSchemaHeaders headers;
    public UpgradeAppliedSchemaRequest withHeaders(UpgradeAppliedSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpgradeAppliedSchemaRequestBody request;
    public UpgradeAppliedSchemaRequest withRequest(UpgradeAppliedSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}