package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsStartForOrgRequest {
    public MigrationsStartForOrgPathParams pathParams;
    public MigrationsStartForOrgRequest withPathParams(MigrationsStartForOrgPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsStartForOrgRequestBody request;
    public MigrationsStartForOrgRequest withRequest(MigrationsStartForOrgRequestBody request) {
        this.request = request;
        return this;
    }
}