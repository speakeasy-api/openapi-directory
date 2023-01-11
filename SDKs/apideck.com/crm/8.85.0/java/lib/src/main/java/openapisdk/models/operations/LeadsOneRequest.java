package openapisdk.models.operations;



public class LeadsOneRequest {
    public LeadsOnePathParams pathParams;
    public LeadsOneRequest withPathParams(LeadsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LeadsOneQueryParams queryParams;
    public LeadsOneRequest withQueryParams(LeadsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public LeadsOneHeaders headers;
    public LeadsOneRequest withHeaders(LeadsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public LeadsOneSecurity security;
    public LeadsOneRequest withSecurity(LeadsOneSecurity security) {
        this.security = security;
        return this;
    }
}