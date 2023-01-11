package openapisdk.models.operations;



public class GetMessagesSendRequest {
    public GetMessagesSendQueryParams queryParams;
    public GetMessagesSendRequest withQueryParams(GetMessagesSendQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetMessagesSendSecurity security;
    public GetMessagesSendRequest withSecurity(GetMessagesSendSecurity security) {
        this.security = security;
        return this;
    }
}