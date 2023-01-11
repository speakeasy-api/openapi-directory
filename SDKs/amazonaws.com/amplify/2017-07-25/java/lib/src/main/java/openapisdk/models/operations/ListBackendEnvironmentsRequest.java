package openapisdk.models.operations;



public class ListBackendEnvironmentsRequest {
    public ListBackendEnvironmentsPathParams pathParams;
    public ListBackendEnvironmentsRequest withPathParams(ListBackendEnvironmentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListBackendEnvironmentsQueryParams queryParams;
    public ListBackendEnvironmentsRequest withQueryParams(ListBackendEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListBackendEnvironmentsHeaders headers;
    public ListBackendEnvironmentsRequest withHeaders(ListBackendEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}