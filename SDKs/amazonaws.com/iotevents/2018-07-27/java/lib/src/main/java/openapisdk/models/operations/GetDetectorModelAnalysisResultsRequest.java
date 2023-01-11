package openapisdk.models.operations;



public class GetDetectorModelAnalysisResultsRequest {
    public GetDetectorModelAnalysisResultsPathParams pathParams;
    public GetDetectorModelAnalysisResultsRequest withPathParams(GetDetectorModelAnalysisResultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDetectorModelAnalysisResultsQueryParams queryParams;
    public GetDetectorModelAnalysisResultsRequest withQueryParams(GetDetectorModelAnalysisResultsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetectorModelAnalysisResultsHeaders headers;
    public GetDetectorModelAnalysisResultsRequest withHeaders(GetDetectorModelAnalysisResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
}