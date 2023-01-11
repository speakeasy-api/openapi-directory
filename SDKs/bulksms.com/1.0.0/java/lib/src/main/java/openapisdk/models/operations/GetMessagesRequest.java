package openapisdk.models.operations;



public class GetMessagesRequest {
    public GetMessagesQueryParams queryParams;
    public GetMessagesRequest withQueryParams(GetMessagesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMessagesSecurity security;
    public GetMessagesRequest withSecurity(GetMessagesSecurity security) {
        this.security = security;
        return this;
    }
}