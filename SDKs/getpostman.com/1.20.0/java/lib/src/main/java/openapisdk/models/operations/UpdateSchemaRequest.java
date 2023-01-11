package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSchemaRequest {
    public UpdateSchemaPathParams pathParams;
    public UpdateSchemaRequest withPathParams(UpdateSchemaPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSchemaRequestBody request;
    public UpdateSchemaRequest withRequest(UpdateSchemaRequestBody request) {
        this.request = request;
        return this;
    }
}