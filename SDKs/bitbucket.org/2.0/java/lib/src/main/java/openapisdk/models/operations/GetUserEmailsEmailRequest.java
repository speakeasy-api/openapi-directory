package openapisdk.models.operations;



public class GetUserEmailsEmailRequest {
    public GetUserEmailsEmailPathParams pathParams;
    public GetUserEmailsEmailRequest withPathParams(GetUserEmailsEmailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUserEmailsEmailSecurity security;
    public GetUserEmailsEmailRequest withSecurity(GetUserEmailsEmailSecurity security) {
        this.security = security;
        return this;
    }
}