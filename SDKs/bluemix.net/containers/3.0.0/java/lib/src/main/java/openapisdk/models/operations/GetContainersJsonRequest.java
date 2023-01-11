package openapisdk.models.operations;



public class GetContainersJsonRequest {
    public GetContainersJsonQueryParams queryParams;
    public GetContainersJsonRequest withQueryParams(GetContainersJsonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetContainersJsonHeaders headers;
    public GetContainersJsonRequest withHeaders(GetContainersJsonHeaders headers) {
        this.headers = headers;
        return this;
    }
}