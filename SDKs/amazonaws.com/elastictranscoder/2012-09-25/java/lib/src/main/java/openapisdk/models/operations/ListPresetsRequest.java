package openapisdk.models.operations;



public class ListPresetsRequest {
    public ListPresetsQueryParams queryParams;
    public ListPresetsRequest withQueryParams(ListPresetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPresetsHeaders headers;
    public ListPresetsRequest withHeaders(ListPresetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}