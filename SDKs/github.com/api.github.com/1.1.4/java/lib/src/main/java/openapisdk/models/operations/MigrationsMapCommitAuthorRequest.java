package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsMapCommitAuthorRequest {
    public MigrationsMapCommitAuthorPathParams pathParams;
    public MigrationsMapCommitAuthorRequest withPathParams(MigrationsMapCommitAuthorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MigrationsMapCommitAuthorRequestBody request;
    public MigrationsMapCommitAuthorRequest withRequest(MigrationsMapCommitAuthorRequestBody request) {
        this.request = request;
        return this;
    }
}