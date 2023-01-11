package openapisdk.models.operations;



public class GetMemberRequest {
    public GetMemberPathParams pathParams;
    public GetMemberRequest withPathParams(GetMemberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetMemberHeaders headers;
    public GetMemberRequest withHeaders(GetMemberHeaders headers) {
        this.headers = headers;
        return this;
    }
}