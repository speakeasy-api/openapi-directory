package openapisdk.models.operations;



public class ListEmailIdentitiesRequest {
    public ListEmailIdentitiesQueryParams queryParams;
    public ListEmailIdentitiesRequest withQueryParams(ListEmailIdentitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEmailIdentitiesHeaders headers;
    public ListEmailIdentitiesRequest withHeaders(ListEmailIdentitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
}