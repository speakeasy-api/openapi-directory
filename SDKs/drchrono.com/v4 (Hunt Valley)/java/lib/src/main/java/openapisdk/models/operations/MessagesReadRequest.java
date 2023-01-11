package openapisdk.models.operations;



public class MessagesReadRequest {
    public MessagesReadPathParams pathParams;
    public MessagesReadRequest withPathParams(MessagesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesReadQueryParams queryParams;
    public MessagesReadRequest withQueryParams(MessagesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesReadSecurity security;
    public MessagesReadRequest withSecurity(MessagesReadSecurity security) {
        this.security = security;
        return this;
    }
}