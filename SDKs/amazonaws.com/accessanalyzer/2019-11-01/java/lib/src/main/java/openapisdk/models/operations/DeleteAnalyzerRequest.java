package openapisdk.models.operations;



public class DeleteAnalyzerRequest {
    public DeleteAnalyzerPathParams pathParams;
    public DeleteAnalyzerRequest withPathParams(DeleteAnalyzerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAnalyzerQueryParams queryParams;
    public DeleteAnalyzerRequest withQueryParams(DeleteAnalyzerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteAnalyzerHeaders headers;
    public DeleteAnalyzerRequest withHeaders(DeleteAnalyzerHeaders headers) {
        this.headers = headers;
        return this;
    }
}