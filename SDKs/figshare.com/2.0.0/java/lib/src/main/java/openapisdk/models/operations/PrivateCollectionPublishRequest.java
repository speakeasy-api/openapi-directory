package openapisdk.models.operations;



public class PrivateCollectionPublishRequest {
    public PrivateCollectionPublishPathParams pathParams;
    public PrivateCollectionPublishRequest withPathParams(PrivateCollectionPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionPublishSecurity security;
    public PrivateCollectionPublishRequest withSecurity(PrivateCollectionPublishSecurity security) {
        this.security = security;
        return this;
    }
}