package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseUpdateCollectionRequest {
    public DatabaseUpdateCollectionPathParams pathParams;
    public DatabaseUpdateCollectionRequest withPathParams(DatabaseUpdateCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DatabaseUpdateCollectionRequestBody request;
    public DatabaseUpdateCollectionRequest withRequest(DatabaseUpdateCollectionRequestBody request) {
        this.request = request;
        return this;
    }
    public DatabaseUpdateCollectionSecurity security;
    public DatabaseUpdateCollectionRequest withSecurity(DatabaseUpdateCollectionSecurity security) {
        this.security = security;
        return this;
    }
}