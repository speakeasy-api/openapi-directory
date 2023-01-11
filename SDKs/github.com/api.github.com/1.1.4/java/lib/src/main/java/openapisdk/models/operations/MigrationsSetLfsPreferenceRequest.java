package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsSetLfsPreferenceRequest {
    public MigrationsSetLfsPreferencePathParams pathParams;
    public MigrationsSetLfsPreferenceRequest withPathParams(MigrationsSetLfsPreferencePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsSetLfsPreferenceRequestBody request;
    public MigrationsSetLfsPreferenceRequest withRequest(MigrationsSetLfsPreferenceRequestBody request) {
        this.request = request;
        return this;
    }
}