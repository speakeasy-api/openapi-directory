package openapisdk.models.operations;



public class GetInsightResultsRequest {
    public GetInsightResultsPathParams pathParams;
    public GetInsightResultsRequest withPathParams(GetInsightResultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetInsightResultsHeaders headers;
    public GetInsightResultsRequest withHeaders(GetInsightResultsHeaders headers) {
        this.headers = headers;
        return this;
    }
}