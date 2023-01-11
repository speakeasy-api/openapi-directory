package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOnlineMigrationRequest {
    public UpdateOnlineMigrationPathParams pathParams;
    public UpdateOnlineMigrationRequest withPathParams(UpdateOnlineMigrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOnlineMigrationRequestBody request;
    public UpdateOnlineMigrationRequest withRequest(UpdateOnlineMigrationRequestBody request) {
        this.request = request;
        return this;
    }
}