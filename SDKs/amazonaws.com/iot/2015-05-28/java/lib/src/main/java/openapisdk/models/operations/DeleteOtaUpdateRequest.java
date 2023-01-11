package openapisdk.models.operations;



public class DeleteOtaUpdateRequest {
    public DeleteOtaUpdatePathParams pathParams;
    public DeleteOtaUpdateRequest withPathParams(DeleteOtaUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteOtaUpdateQueryParams queryParams;
    public DeleteOtaUpdateRequest withQueryParams(DeleteOtaUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteOtaUpdateHeaders headers;
    public DeleteOtaUpdateRequest withHeaders(DeleteOtaUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
}