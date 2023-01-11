package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivateCollectionAuthorsReplaceRequest {
    public PrivateCollectionAuthorsReplacePathParams pathParams;
    public PrivateCollectionAuthorsReplaceRequest withPathParams(PrivateCollectionAuthorsReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AuthorsCreator request;
    public PrivateCollectionAuthorsReplaceRequest withRequest(openapisdk.models.shared.AuthorsCreator request) {
        this.request = request;
        return this;
    }
    public PrivateCollectionAuthorsReplaceSecurity security;
    public PrivateCollectionAuthorsReplaceRequest withSecurity(PrivateCollectionAuthorsReplaceSecurity security) {
        this.security = security;
        return this;
    }
}