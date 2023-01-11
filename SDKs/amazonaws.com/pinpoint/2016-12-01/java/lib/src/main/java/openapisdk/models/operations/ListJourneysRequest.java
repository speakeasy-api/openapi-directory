package openapisdk.models.operations;



public class ListJourneysRequest {
    public ListJourneysPathParams pathParams;
    public ListJourneysRequest withPathParams(ListJourneysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListJourneysQueryParams queryParams;
    public ListJourneysRequest withQueryParams(ListJourneysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListJourneysHeaders headers;
    public ListJourneysRequest withHeaders(ListJourneysHeaders headers) {
        this.headers = headers;
        return this;
    }
}