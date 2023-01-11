package openapisdk.models.operations;



public class ContactsDeleteRequest {
    public ContactsDeletePathParams pathParams;
    public ContactsDeleteRequest withPathParams(ContactsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ContactsDeleteQueryParams queryParams;
    public ContactsDeleteRequest withQueryParams(ContactsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsDeleteHeaders headers;
    public ContactsDeleteRequest withHeaders(ContactsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ContactsDeleteSecurity security;
    public ContactsDeleteRequest withSecurity(ContactsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}