package openapisdk.models.operations;



public class GetUpdateApplicationRequest {
    public GetUpdateApplicationQueryParams queryParams;
    public GetUpdateApplicationRequest withQueryParams(GetUpdateApplicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdateApplicationHeaders headers;
    public GetUpdateApplicationRequest withHeaders(GetUpdateApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
}