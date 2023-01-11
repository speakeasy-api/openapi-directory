package openapisdk.models.operations;



public class DeletePolicyRequest {
    public DeletePolicyPathParams pathParams;
    public DeletePolicyRequest withPathParams(DeletePolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePolicyHeaders headers;
    public DeletePolicyRequest withHeaders(DeletePolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}