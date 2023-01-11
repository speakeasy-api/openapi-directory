package openapisdk.models.operations;



public class MessagesDeleteRequest {
    public MessagesDeletePathParams pathParams;
    public MessagesDeleteRequest withPathParams(MessagesDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesDeleteQueryParams queryParams;
    public MessagesDeleteRequest withQueryParams(MessagesDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesDeleteHeaders headers;
    public MessagesDeleteRequest withHeaders(MessagesDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public MessagesDeleteSecurity security;
    public MessagesDeleteRequest withSecurity(MessagesDeleteSecurity security) {
        this.security = security;
        return this;
    }
}