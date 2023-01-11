package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpgradePublishedSchemaRequest {
    public UpgradePublishedSchemaHeaders headers;
    public UpgradePublishedSchemaRequest withHeaders(UpgradePublishedSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpgradePublishedSchemaRequestBody request;
    public UpgradePublishedSchemaRequest withRequest(UpgradePublishedSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}