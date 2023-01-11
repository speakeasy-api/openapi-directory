package openapisdk.models.operations;



public class GetCredentialsRequest {
    public GetCredentialsPathParams pathParams;
    public GetCredentialsRequest withPathParams(GetCredentialsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCredentialsQueryParams queryParams;
    public GetCredentialsRequest withQueryParams(GetCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}