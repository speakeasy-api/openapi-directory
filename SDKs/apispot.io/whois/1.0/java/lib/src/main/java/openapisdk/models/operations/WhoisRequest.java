package openapisdk.models.operations;



public class WhoisRequest {
    public WhoisPathParams pathParams;
    public WhoisRequest withPathParams(WhoisPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WhoisQueryParams queryParams;
    public WhoisRequest withQueryParams(WhoisQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}