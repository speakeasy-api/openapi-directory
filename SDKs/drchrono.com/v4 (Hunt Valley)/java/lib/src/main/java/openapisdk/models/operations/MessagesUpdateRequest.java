package openapisdk.models.operations;



public class MessagesUpdateRequest {
    public MessagesUpdatePathParams pathParams;
    public MessagesUpdateRequest withPathParams(MessagesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesUpdateQueryParams queryParams;
    public MessagesUpdateRequest withQueryParams(MessagesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesUpdateSecurity security;
    public MessagesUpdateRequest withSecurity(MessagesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}