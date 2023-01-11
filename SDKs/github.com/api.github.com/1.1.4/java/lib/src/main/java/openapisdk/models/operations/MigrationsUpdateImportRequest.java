package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsUpdateImportRequest {
    public MigrationsUpdateImportPathParams pathParams;
    public MigrationsUpdateImportRequest withPathParams(MigrationsUpdateImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsUpdateImportRequestBody request;
    public MigrationsUpdateImportRequest withRequest(MigrationsUpdateImportRequestBody request) {
        this.request = request;
        return this;
    }
}