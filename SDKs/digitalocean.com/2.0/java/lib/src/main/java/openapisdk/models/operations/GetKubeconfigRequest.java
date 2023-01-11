package openapisdk.models.operations;



public class GetKubeconfigRequest {
    public GetKubeconfigPathParams pathParams;
    public GetKubeconfigRequest withPathParams(GetKubeconfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetKubeconfigQueryParams queryParams;
    public GetKubeconfigRequest withQueryParams(GetKubeconfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}