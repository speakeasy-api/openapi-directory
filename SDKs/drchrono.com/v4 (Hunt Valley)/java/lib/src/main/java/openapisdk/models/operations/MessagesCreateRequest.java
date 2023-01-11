package openapisdk.models.operations;



public class MessagesCreateRequest {
    public MessagesCreateQueryParams queryParams;
    public MessagesCreateRequest withQueryParams(MessagesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesCreateSecurity security;
    public MessagesCreateRequest withSecurity(MessagesCreateSecurity security) {
        this.security = security;
        return this;
    }
}