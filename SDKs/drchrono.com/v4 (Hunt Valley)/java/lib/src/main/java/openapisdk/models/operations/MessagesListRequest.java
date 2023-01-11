package openapisdk.models.operations;



public class MessagesListRequest {
    public MessagesListQueryParams queryParams;
    public MessagesListRequest withQueryParams(MessagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesListSecurity security;
    public MessagesListRequest withSecurity(MessagesListSecurity security) {
        this.security = security;
        return this;
    }
}