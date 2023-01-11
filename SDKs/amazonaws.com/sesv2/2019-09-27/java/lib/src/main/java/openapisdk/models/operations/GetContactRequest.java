package openapisdk.models.operations;



public class GetContactRequest {
    public GetContactPathParams pathParams;
    public GetContactRequest withPathParams(GetContactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContactHeaders headers;
    public GetContactRequest withHeaders(GetContactHeaders headers) {
        this.headers = headers;
        return this;
    }
}