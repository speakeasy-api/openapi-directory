package openapisdk.models.operations;



public class ListAssessmentsRequest {
    public ListAssessmentsQueryParams queryParams;
    public ListAssessmentsRequest withQueryParams(ListAssessmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssessmentsHeaders headers;
    public ListAssessmentsRequest withHeaders(ListAssessmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}