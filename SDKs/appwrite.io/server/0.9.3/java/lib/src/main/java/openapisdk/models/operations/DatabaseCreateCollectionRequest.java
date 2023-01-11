package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatabaseCreateCollectionRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DatabaseCreateCollectionRequestBody request;
    public DatabaseCreateCollectionRequest withRequest(DatabaseCreateCollectionRequestBody request) {
        this.request = request;
        return this;
    }
    public DatabaseCreateCollectionSecurity security;
    public DatabaseCreateCollectionRequest withSecurity(DatabaseCreateCollectionSecurity security) {
        this.security = security;
        return this;
    }
}