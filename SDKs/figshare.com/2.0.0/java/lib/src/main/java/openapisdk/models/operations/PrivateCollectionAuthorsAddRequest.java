package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorsAddRequest {
    public PrivateCollectionAuthorsAddPathParams pathParams;
    public PrivateCollectionAuthorsAddRequest withPathParams(PrivateCollectionAuthorsAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorsCreator request;
    public PrivateCollectionAuthorsAddRequest withRequest(openapisdk.models.shared.AuthorsCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionAuthorsAddSecurity security;
    public PrivateCollectionAuthorsAddRequest withSecurity(PrivateCollectionAuthorsAddSecurity security) {
        this.security = security;
        return this;
    }
}