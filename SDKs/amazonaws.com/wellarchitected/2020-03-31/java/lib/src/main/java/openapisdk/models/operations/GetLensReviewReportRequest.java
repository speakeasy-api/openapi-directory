package openapisdk.models.operations;



public class GetLensReviewReportRequest {
    public GetLensReviewReportPathParams pathParams;
    public GetLensReviewReportRequest withPathParams(GetLensReviewReportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetLensReviewReportQueryParams queryParams;
    public GetLensReviewReportRequest withQueryParams(GetLensReviewReportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetLensReviewReportHeaders headers;
    public GetLensReviewReportRequest withHeaders(GetLensReviewReportHeaders headers) {
        this.headers = headers;
        return this;
    }
}