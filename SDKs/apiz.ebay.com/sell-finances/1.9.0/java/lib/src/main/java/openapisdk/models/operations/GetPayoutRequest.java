package openapisdk.models.operations;



public class GetPayoutRequest {
    public GetPayoutPathParams pathParams;
    public GetPayoutRequest withPathParams(GetPayoutPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPayoutSecurity security;
    public GetPayoutRequest withSecurity(GetPayoutSecurity security) {
        this.security = security;
        return this;
    }
}