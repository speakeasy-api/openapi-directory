package openapisdk.models.operations;



public class CodeScanningListRecentAnalysesRequest {
    public CodeScanningListRecentAnalysesPathParams pathParams;
    public CodeScanningListRecentAnalysesRequest withPathParams(CodeScanningListRecentAnalysesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CodeScanningListRecentAnalysesQueryParams queryParams;
    public CodeScanningListRecentAnalysesRequest withQueryParams(CodeScanningListRecentAnalysesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}