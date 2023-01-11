package openapisdk.models.operations;



public class CancelChangeSetRequest {
    public CancelChangeSetQueryParams queryParams;
    public CancelChangeSetRequest withQueryParams(CancelChangeSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CancelChangeSetHeaders headers;
    public CancelChangeSetRequest withHeaders(CancelChangeSetHeaders headers) {
        this.headers = headers;
        return this;
    }
}