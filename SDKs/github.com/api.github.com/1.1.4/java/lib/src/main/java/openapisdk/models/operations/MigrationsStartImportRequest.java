package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsStartImportRequest {
    public MigrationsStartImportPathParams pathParams;
    public MigrationsStartImportRequest withPathParams(MigrationsStartImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsStartImportRequestBody request;
    public MigrationsStartImportRequest withRequest(MigrationsStartImportRequestBody request) {
        this.request = request;
        return this;
    }
}