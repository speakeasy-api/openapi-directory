package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRelationsRequest {
    public CreateRelationsPathParams pathParams;
    public CreateRelationsRequest withPathParams(CreateRelationsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRelationsRequestBody request;
    public CreateRelationsRequest withRequest(CreateRelationsRequestBody request) {
        this.request = request;
        return this;
    }
}