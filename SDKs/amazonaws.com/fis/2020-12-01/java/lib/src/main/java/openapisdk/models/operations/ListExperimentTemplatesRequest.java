package openapisdk.models.operations;



public class ListExperimentTemplatesRequest {
    public ListExperimentTemplatesQueryParams queryParams;
    public ListExperimentTemplatesRequest withQueryParams(ListExperimentTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListExperimentTemplatesHeaders headers;
    public ListExperimentTemplatesRequest withHeaders(ListExperimentTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}