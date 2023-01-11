package openapisdk.models.operations;



public class DecodeRequest {
    public DecodePathParams pathParams;
    public DecodeRequest withPathParams(DecodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DecodeQueryParams queryParams;
    public DecodeRequest withQueryParams(DecodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}