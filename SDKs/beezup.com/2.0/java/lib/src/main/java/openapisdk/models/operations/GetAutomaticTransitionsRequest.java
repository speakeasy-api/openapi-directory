package openapisdk.models.operations;



public class GetAutomaticTransitionsRequest {
    public GetAutomaticTransitionsQueryParams queryParams;
    public GetAutomaticTransitionsRequest withQueryParams(GetAutomaticTransitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAutomaticTransitionsHeaders headers;
    public GetAutomaticTransitionsRequest withHeaders(GetAutomaticTransitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}