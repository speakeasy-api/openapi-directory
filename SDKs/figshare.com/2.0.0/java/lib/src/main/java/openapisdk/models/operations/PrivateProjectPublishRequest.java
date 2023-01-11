package openapisdk.models.operations;



public class PrivateProjectPublishRequest {
    public PrivateProjectPublishPathParams pathParams;
    public PrivateProjectPublishRequest withPathParams(PrivateProjectPublishPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateProjectPublishSecurity security;
    public PrivateProjectPublishRequest withSecurity(PrivateProjectPublishSecurity security) {
        this.security = security;
        return this;
    }
}