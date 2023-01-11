package openapisdk.models.operations;



public class GetComposeEnvironmentsRequest {
    public GetComposeEnvironmentsQueryParams queryParams;
    public GetComposeEnvironmentsRequest withQueryParams(GetComposeEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComposeEnvironmentsHeaders headers;
    public GetComposeEnvironmentsRequest withHeaders(GetComposeEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}