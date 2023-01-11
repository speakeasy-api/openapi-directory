package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishSchemaRequest {
    public PublishSchemaHeaders headers;
    public PublishSchemaRequest withHeaders(PublishSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PublishSchemaRequestBody request;
    public PublishSchemaRequest withRequest(PublishSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}