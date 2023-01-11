package openapisdk.models.operations;



public class GetListTemplatesRequest {
    public GetListTemplatesQueryParams queryParams;
    public GetListTemplatesRequest withQueryParams(GetListTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListTemplatesHeaders headers;
    public GetListTemplatesRequest withHeaders(GetListTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}