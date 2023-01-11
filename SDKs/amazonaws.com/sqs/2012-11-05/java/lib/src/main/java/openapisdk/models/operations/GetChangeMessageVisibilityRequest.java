package openapisdk.models.operations;



public class GetChangeMessageVisibilityRequest {
    public GetChangeMessageVisibilityPathParams pathParams;
    public GetChangeMessageVisibilityRequest withPathParams(GetChangeMessageVisibilityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetChangeMessageVisibilityQueryParams queryParams;
    public GetChangeMessageVisibilityRequest withQueryParams(GetChangeMessageVisibilityQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChangeMessageVisibilityHeaders headers;
    public GetChangeMessageVisibilityRequest withHeaders(GetChangeMessageVisibilityHeaders headers) {
        this.headers = headers;
        return this;
    }
}