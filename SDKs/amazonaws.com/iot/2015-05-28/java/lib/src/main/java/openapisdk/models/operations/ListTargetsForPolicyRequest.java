package openapisdk.models.operations;



public class ListTargetsForPolicyRequest {
    public ListTargetsForPolicyPathParams pathParams;
    public ListTargetsForPolicyRequest withPathParams(ListTargetsForPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTargetsForPolicyQueryParams queryParams;
    public ListTargetsForPolicyRequest withQueryParams(ListTargetsForPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTargetsForPolicyHeaders headers;
    public ListTargetsForPolicyRequest withHeaders(ListTargetsForPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}