package openapisdk.models.operations;



public class RevokeLtiCredentialsRequest {
    public RevokeLtiCredentialsPathParams pathParams;
    public RevokeLtiCredentialsRequest withPathParams(RevokeLtiCredentialsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RevokeLtiCredentialsSecurity security;
    public RevokeLtiCredentialsRequest withSecurity(RevokeLtiCredentialsSecurity security) {
        this.security = security;
        return this;
    }
}