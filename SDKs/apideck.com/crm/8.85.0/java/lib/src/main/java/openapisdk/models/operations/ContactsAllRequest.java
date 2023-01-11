package openapisdk.models.operations;



public class ContactsAllRequest {
    public ContactsAllQueryParams queryParams;
    public ContactsAllRequest withQueryParams(ContactsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ContactsAllHeaders headers;
    public ContactsAllRequest withHeaders(ContactsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public ContactsAllSecurity security;
    public ContactsAllRequest withSecurity(ContactsAllSecurity security) {
        this.security = security;
        return this;
    }
}