package openapisdk.models.operations;



public class GetProgrammaticAccessCredentialsRequest {
    public GetProgrammaticAccessCredentialsQueryParams queryParams;
    public GetProgrammaticAccessCredentialsRequest withQueryParams(GetProgrammaticAccessCredentialsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProgrammaticAccessCredentialsHeaders headers;
    public GetProgrammaticAccessCredentialsRequest withHeaders(GetProgrammaticAccessCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
}