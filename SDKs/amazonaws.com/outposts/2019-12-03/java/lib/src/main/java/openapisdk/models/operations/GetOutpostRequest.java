package openapisdk.models.operations;



public class GetOutpostRequest {
    public GetOutpostPathParams pathParams;
    public GetOutpostRequest withPathParams(GetOutpostPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOutpostHeaders headers;
    public GetOutpostRequest withHeaders(GetOutpostHeaders headers) {
        this.headers = headers;
        return this;
    }
}