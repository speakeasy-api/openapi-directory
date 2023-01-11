package openapisdk.models.operations;



public class GetAnswerRequest {
    public GetAnswerPathParams pathParams;
    public GetAnswerRequest withPathParams(GetAnswerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAnswerQueryParams queryParams;
    public GetAnswerRequest withQueryParams(GetAnswerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAnswerHeaders headers;
    public GetAnswerRequest withHeaders(GetAnswerHeaders headers) {
        this.headers = headers;
        return this;
    }
}